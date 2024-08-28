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
        // file.raw = files[file._id].split('---');
        const contentPos = getPosition(files[file._id], '---', 2) + 3;
        const mdContent = files[file._id].slice(contentPos)
        file.plainContent = RemoveMarkdown(mdContent).replace(/(\r\n|\n|\r)/gm, " ")
        // console.log('afterParse', { file });
      }
    });
  
    // console.log('files', files);
  });
  