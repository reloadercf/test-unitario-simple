let {generateAlgo}=require('./ejemplo')

test("Imprimir tu nombre ",()=>{
    let desesperacion=generateAlgo("carlos");
    expect(desesperacion).toBe("Hola carlos")
})