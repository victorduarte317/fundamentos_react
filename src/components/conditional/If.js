/*
    The concept of the conditional rendering resolves around 
    adding a condition to verify if any given content will be rendered or not.

    <If test = {conditional expression}
        <span> content to render </span>
        <span> content to render </span>
        <span> content to render </span>
    </If>
*/

export default props => {
    // query to find the <Else> component. Returns an array.

    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    }) [0]

    // if the "if" conditions are true, then ifChildren will
    // render all the <If> childs except for what's inside <Else> - and <Else> itself.

    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })

    if(props.test) {
        
        return ifChildren

    } else if (elseChild){

        return elseChild

    } else {
        
        return false
    }
}

export const Else = props => props.children // will return what he received as children property