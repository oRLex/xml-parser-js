
const xml2json = (source: any) => {
    let children = [...source.children];

    if (!children.length) {
        return source.innerHTML
    }

    let result: any = {};

    for (let child of children) {
        let childIsArray = children.filter(curchild => curchild.nodeName === child.nodeName).length > 1;

        if (childIsArray) {
            if (result[child.nodeName] === undefined) {
                result[child.nodeName] = [xml2json(child)];
            } else {
                result[child.nodeName].push(xml2json(child));
            }
        } else {
            result[child.nodeName] = xml2json(child);
        }
    }

    return result;
};

export const parse = (data: Array<any>) => {
    const alldata = []
    for (let i = 0; i < data.length; i++) {
        const {Entry} = parser(data[i])
        alldata.push(Entry)
    }
    return alldata.flat()
}

export const parser = (xml: string)=> {
    const parser = new DOMParser();
    const srcDOM = parser.parseFromString(xml, "application/xml");
    const {Entries} = xml2json(srcDOM);
    return Entries
}



