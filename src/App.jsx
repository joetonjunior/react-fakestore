import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

//let produtosFiltrados = []
const App = () => {

  const [produtos, setProdutos] = useState([]);
  const [testejoe, setJoe] = useState([]);

  function buscarProdutos() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => { return response.json() })
      .then((response) => {
        setProdutos(response)
        setJoe(response) 
      })
  }


  function filtrarProdutos(categoria) {
  
  if (categoria != "All") {
    //retornaOriginal()
    //produtosFiltrados = [];
    //setProdutos(testejoe);
    const produtosFiltrados = testejoe.filter((produto) => {
      return produto.category == categoria.toLowerCase();
    })
    
    //produtosFiltrados.push(produtosFiltrados.splice(0,1)[0]);
    //produtosFiltrados.sort();
    //produtosFiltrados = [...produtosFiltrados]
    //produtosFiltrados = produtosFiltrados.reverse()
    
    setProdutos(produtosFiltrados);
    
  } else {
    setProdutos(testejoe);
  }
}

  useEffect(() => {
    buscarProdutos();
  }, [])

  return (
    <>
      <Header filtrarProdutos={filtrarProdutos}/>
      <main className="p-15 bg-slate-200">
        <div className="grid grid-cols-4 gap-4">
          {
            produtos.map((produto) => (
                 <Card
                  key={produto.id}
                  title={produto.title}
                  image={produto.image}
                  category={produto.category}
                  price={produto.price}
                  rate={produto.rating.rate}
                />
            ))
          }
        </div>
      </main>
    </>
  );
}

export default App;
