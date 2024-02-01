function formValues() {
    console.log(document.teste.field.value)
    if(document.teste.field.value === 'teste'){
        document.getElementById('teste').style.display = block
        window.alert('parabéns')
        
    } else {
        window.alert('tente novamente')
    }
}