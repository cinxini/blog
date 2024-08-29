import c from '@/constants/posts';
import RemoveMarkdown from "remove-markdown";

function getPosition(str, subStr, nPos) {
    return str.split(subStr, nPos).join(subStr).length;
}

function findHeadings(md){
  const regex = /(?<=(^#{1,4})\s).*/gm;
  const headings = [...md.matchAll(regex)]
  return headings;
}

function mdToPlain(md){
  return RemoveMarkdown(md).replace(/(\r\n|\n|\r)/gm, " ");
}

function mdToSections(md) {
  const headings = findHeadings(md)
  console.log(headings)
  const sections = []

  headings.forEach((heading, i) => {
    if (i === 0) {
      const newSection = {};
      newSection.id = '#top'
      newSection.name = 'Top'
      newSection.content = mdToPlain(md.slice(0, heading.index))
      sections.push(newSection)
    }

    const newSection = {};
    if (i === (headings.length - 1)) {
      newSection.id = `#${heading[0].toLowerCase().split(' ').join('-')}`
      newSection.name = heading[0];
      newSection.content = mdToPlain(md.slice(heading.index))
    }
    else {
      newSection.id = `#${heading[0].toLowerCase().split(' ').join('-')}`
      newSection.name = heading[0];
      newSection.content = mdToPlain(md.slice(heading.index, headings[i + 1].index))
    }
    sections.push(newSection)
  })
  return sections;
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
        file.sections = mdToSections(mdContent);
        file.plainContent = RemoveMarkdown(mdContent).replace(/(\r\n|\n|\r)/gm, " ")

        // page type
        const pageType = file._id.split(':')[1];
        file.pageType = c.PAGE_TYPE.includes(pageType)? pageType: 'info';
      }
    });
  
    // console.log('files', files);
  });
  