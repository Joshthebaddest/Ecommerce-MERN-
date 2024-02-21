import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineFileAdd } from 'react-icons/ai';
import { Tooltip } from "react-tooltip";


const DataTable = ({data, sortBy, filteredAndSortedData, handleFilterByCategory, handleSortByPrice, add, edit, deleteOne }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [DataPerPage] = useState(2);
    const [searchTerm, setSearchTerm] = useState('');

    // Function to filter products by search term
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    
    const filteredProducts = data?.filter((item) =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Pagination
    const indexOfLastProduct = currentPage * DataPerPage;
    const indexOfFirstProduct = indexOfLastProduct - DataPerPage;
    const currentProducts = filteredProducts?.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

    return(<>
        <div className="container mx-auto max-w-[800px]">
            <div className="flex justify-between m-10 mb-16">
                <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
                <button id="add" className="border rounded-md p-2 bg-blue-500 text-white hover:bg-blue-700" onClick={()=>add('Add Product')}><AiOutlineFileAdd /></button>
                <Tooltip anchorSelect="#add" content="Add"/>
            </div>
            <div className="flex justify-between mb-4">
                <input type="text" placeholder="Search by name..." className="border rounded-md py-2 px-4 w-1/3 outline-none" onChange={handleSearch} />
                <select className="border rounded-md py-2 px-4" onChange={(e) => handleFilterByCategory(e.target.value)} >
                    <option value="">All Categories</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                </select>
                <button className="border rounded-md py-2 px-4 bg-blue-500 text-white hover:bg-blue-700" onClick={handleSortByPrice}> Sort by Price {sortBy === 'price-asc' ? '▲' : '▼'}</button>
            </div>
            <div className="overflow-x-auto overflow-y-auto h-[400px]">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Image</th>
                            <th className="py-3 px-6 text-left">Product Name</th>
                            <th className="py-3 px-6 text-left">Price</th>
                            <th className="py-3 px-6 text-left">Qty</th>
                            <th className="py-3 px-6 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {data && filteredAndSortedData && filteredAndSortedData.map((data) => (
                        <tr key={data._id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                <img src={data.images ? data.images[0]: ''} alt={data.images} className="w-12 h-12 object-cover" />
                            </td>
                            <td className="py-3 px-6 text-left">{data.productName}</td>
                            <td className="py-3 px-6 text-left">$ {data.price}</td>
                            <td className="py-3 px-6 text-left">{data.quantityAvailable}</td>
                            <td className="py-3 px-6 text-left">
                                <div className="flex items-center space-x-2">
                                    <button id="edit" className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded" onClick={()=>edit(data._id,"Edit")}><AiOutlineEdit /></button>
                                    <Tooltip anchorSelect="#edit" content="Edit"/>
                                    <button id="delete" className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded" onClick={()=>deleteOne(data._id)}><AiOutlineDelete /></button>
                                    <Tooltip anchorSelect="#delete" content="Delete"/>
                                </div>
                            </td>
                        </tr>
                        ))}
                        <div>
                            {filteredProducts?.length > DataPerPage && (
                            <ul className="flex justify-center mt-4">
                                {[...Array(Math.ceil(filteredProducts.length / DataPerPage)).keys()].map(
                                pageNumber => (
                                    <li key={pageNumber} className="mx-1">
                                    <button
                                        className="px-3 py-1 bg-gray-200 rounded"
                                        onClick={() => paginate(pageNumber + 1)}
                                    >
                                        {pageNumber + 1}
                                    </button>
                                    </li>
                                )
                                )}
                            </ul>
                            )}
                        </div>
                    </tbody>
                </table>
            </div>
        </div>
    </>)

}

export default DataTable;