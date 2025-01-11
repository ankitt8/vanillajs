const data = [
    {
        "id": 1001,
        "label": "Knowledge Base Articles",
        "link": "https://youtube.com/devtoolstech/videos",
        "children": [
            {
                "id": 1,
                "label": "Academic Technologies",
                "link": "https://youtube.com/devtoolstech/videos",
                "children": [
                    {
                        "id": 2,
                        "label": "Lightboard",
                        "link": "https://youtube.com/devtoolstech/videos"
                    },
                    {
                        "id": 3,
                        "label": "OWL 360 Camera Tutorial",
                        "link": "https://youtube.com/devtoolstech/videos"
                    },
                    {
                        "id": 4,
                        "label": "ScreenPal",
                        "link": "https://youtube.com/devtoolstech/videos"
                    }
                ]
            },
            {
                "id": 5,
                "label": "Apple",
                "link": "https://youtube.com/devtoolstech/videos",
                "children": [
                    {
                        "id": 6,
                        "label": "iOS Articles",
                        "link": "https://youtube.com/devtoolstech/videos",
                        "children": [
                            {
                                "id": 23,
                                "label": "VPN with iOS",
                                "link": "https://youtube.com/devtoolstech/videos"
                            },
                            {
                                "id": 24,
                                "label": "Upgrade iOS",
                                "link": "https://youtube.com/devtoolstech/videos"
                            }
                        ]
                    },
                    {
                        "id": 12,
                        "label": "Mac Articles",
                        "link": "https://youtube.com/devtoolstech/videos",
                        "children": [
                            {
                                "id": 29,
                                "label": "Fix macOS",
                                "link": "https://youtube.com/devtoolstech/videos"
                            },
                            {
                                "id": 41,
                                "label": "Upgrade macOS",
                                "link": "https://youtube.com/devtoolstech/videos"
                            }
                        ]
                    },
                    {
                        "id": 67,
                        "label": "Request License",
                        "link": "https://youtube.com/devtoolstech/videos"
                    },
                    {
                        "id": 69,
                        "label": "Purchase Apps",
                        "link": "https://youtube.com/devtoolstech/videos"
                    }
                ]
            }
        ]
    },
    {
        "id": 201,
        "label": "Devtools Tech",
        "link": "https://youtube.com/devtoolstech/videos"
    }
]
const node = document.body;

function createFileStructure (data, nodeToInsertElements, padding) {
    const fragment = document.createDocumentFragment();
    data.forEach((d) => {
        const childrenExist = d.children?.length > 0;
        const div = document.createElement('div');
        const textNodeContainer = document.createElement('div');
        if(childrenExist) {
            const rightArrow = document.createElement('div');
            rightArrow.innerText = '+';
            textNodeContainer.appendChild(rightArrow);
            textNodeContainer.classList.add('clickable');
            div.classList.add('parent');
            // div.style.paddingLeft = `${padding}px`;
            // implies it's a parent and is collapsable

        }
        textNodeContainer.classList.add('row');
        textNodeContainer.style.paddingLeft = `${padding}px`;
        // div.classList.add('parent')
        const textNode = document.createElement('div');
        textNode.innerText = d.label;
        textNodeContainer.appendChild(textNode);
        div.appendChild(textNodeContainer);
        fragment.appendChild(div);


        if(childrenExist) {
            createFileStructure(d.children, div, padding+20);
        }



    })
    nodeToInsertElements.appendChild(fragment);
}
createFileStructure(data, node, 0);
