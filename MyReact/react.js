
//make a function to render elements on the console
function myrender(reactelement, container) {
    const domelement = document.createElement(reactelement.type)

    domelement.innerHTML = reactelement.children
    // domelement.setAttribute('href', reactelement.props.href)
    // domelement.setAttribute('target', reactelement.props.target)

    // container.appendChild(domelement)

    //better code to set multiple attributes
    for (const x in reactelement.props) {
        // if (prop === 'children') continue;
        domelement.setAttribute(x, reactelement.props[x])
    }
    container.appendChild(domelement)
}

//how javascript see the code after compile

const reactelement = {
    type: 'a',
    props: {
        href: 'https://youtube.com',
        target: '_blank'
    },
    children: 'click to open youtube.'
}

const maincontainer = document.querySelector('#root')

myrender(reactelement, maincontainer)