import c from '@/constants/posts';
import RemoveMarkdown from "remove-markdown";
function getPosition(str, subStr, nPos) {
    return str.split(subStr, nPos).join(subStr).length;
}
export default defineNitroPlugin((nitroApp) => {
    let files: Record<any, any> = {};
  
    nitroApp.hooks.hook('content:file:beforeParse', (file) => {
      if (file._id.endsWith('.md')) {
        files[file._id] = file.body;
        console.log('raw', file.body)
      }
    });
  
    nitroApp.hooks.hook('content:file:afterParse', (file) => {
      if (file._id.endsWith('.md')) {
        // plaintext content part
        const contentPos = getPosition(files[file._id], '---', 2) + 3;
        const mdContent = files[file._id].slice(contentPos)
        file.mdContent = mdContent;
        file.plainContent = RemoveMarkdown(mdContent).replace(/(\r\n|\n|\r)/gm, " ")

        // page type
        const pageType = file._id.split(':')[1];
        file.pageType = c.PAGE_TYPE.includes(pageType)? pageType: 'info';
      }
    });
  
    // console.log('files', files);
  });
  