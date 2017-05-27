import delay from './delay';

const contents = [
    {
        id: '1',
        contentQuery: 'dog'
    },
    {
        id: '2',
        contentQuery: 'cat'
    }
];

const generateId = (content) => {
    return content.contentQuery.toLowerCase() + getRandomInt(0, 10000);
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

class ContentApi {
    static getAllContents() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], contents));
            }, delay);
        });
    }

    static fetchContent(content) {
        console.log(`api:fetchContent [content: ${JSON.stringify(content)}]`);
        content = Object.assign({}, content);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const minContentQueryLength = 3;
                if (content.contentQuery.length < minContentQueryLength) {
                    reject(`Content Query must be at least ${minContentQueryLength} characters.`);
                }

                if (content.id) {
                    const existingContentIndex = contents.findIndex(c => c.id == content.id);
                    contents.splice(existingContentIndex, 1, content);
                } else {
                    content.id = generateId(content);
                    contents.push(content);
                }

                resolve(content);
            }, delay);
        });
    }
}

export default ContentApi;
