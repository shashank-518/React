const customRender = (ReactElement , mainContainer)=>{
    const domElement = document.createElement(ReactElement.type)

    domElement.innerHTML = ReactElement.children

    for(const props in ReactElement.props){
        domElement.setAttribute(props, ReactElement.props[props])
    }

    mainContainer.appendChild(domElement)



}


const ReactElement= {
    type: 'a',
    props:{
        href: 'https:www.google.com',
        target: "_blank",
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root')

customRender(ReactElement , mainContainer)