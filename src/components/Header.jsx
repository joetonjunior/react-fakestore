const Header = ({filtrarProdutos}) => {
    return ( 
         <header className="flex items-center justify-between px-15 py-4 bg-orange-500">
        <div>
            <input type="text" placeholder="Digite o nome do produto" className="w-120 h-10 rounded bg-white pl-4" />
        </div>
        <div>
            <select onChange={(event) => filtrarProdutos(event.target.value)} className="h-10 rounded bg-white px-4">
                <option selected disabled>Filtrar produtos</option>
                <option>All</option>
                <option>men's clothing</option>
                <option>women's clothing</option>
                <option>electronics</option>
                <option>jewelery</option>
            </select>
            <select className="h-10 rounded bg-white px-4">
                <option selected disabled>Ordenar produtos</option>
                <option value="preco">Ordernar por Preço</option>
                <option value="nota">Ordernar por Avaliação</option>
            </select>
        </div>
    </header>
     );
}
 
export default Header;