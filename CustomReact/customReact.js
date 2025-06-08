const customRender = (ReactElement , mainContainer)=>{
    
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