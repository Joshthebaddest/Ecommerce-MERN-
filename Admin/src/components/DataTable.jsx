import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineFileAdd } from 'react-icons/ai';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
import { Tooltip } from "react-tooltip";


const DataTable = ({data, add, edit, deleteOne }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [DataPerPage, setDataPerPage] = useState(5);
    const [productsPerPage, setProductsPerPage] = useState(4);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [filterBy, setFilterBy] = useState('');

    // Function to filter products by search term
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    
    const filteredProducts = data?.filter((item) =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort products based on selected sorting option
    const sortedProducts = filteredProducts?.sort((a, b) => {
        if (sortBy === 'price-asc') {
            return parseFloat(a.price) - parseFloat(b.price);
        } else if (sortBy === 'price-desc') {
            return parseFloat(b.price) - parseFloat(a.price);
        } else {
            return 0;
        }
    });
    

    // Function to handle sorting by price
    const handleSortByPrice = () => {
        if (sortBy === 'price-asc') {
            setSortBy('price-desc');
        }
        else if(sortBy === 'price-desc'){
            setSortBy('')
        }
        else{
            setSortBy('price-asc');
        }
    };
    
    // Function to filter products by category
    const handleFilterByCategory = (category) => {
        setFilterBy(category);
    };

    // Filter products based on selected category
    const filteredAndSortedData = filterBy
        ? sortedProducts.filter((product) => product.category === filterBy)
        : sortedProducts
    ;
    
    
    // Pagination
    const indexOfLastProduct = currentPage * DataPerPage;
    const indexOfFirstProduct = indexOfLastProduct - DataPerPage;
    const currentProducts = filteredProducts?.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return(<>
        <div className="container mx-auto max-w-[800px] pb-[400px]">
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
            </div>
            <div className="overflow-x-auto overflow-y-auto h-[500px] rounded-md">
                <table className="min-w-full table-auto">
                    <thead className="sticky top-0">
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Image 
                                <button className={`opacity-0 hover:opacity-100 text-black w-fit`} onClick={handleSortByPrice}>
                                    {sortBy !== 'price-asc' ? 
                                    <IoIosArrowRoundUp className={`text-xl ml-2 ${sortBy === '' ? 'text-gray-500' : ''}`}/> :
                                    <IoIosArrowRoundDown className="text-xl ml-2" />}
                                </button>
                            </th>
                            <th className="py-3 px-6 text-left">Product Name
                                <button className={`opacity-0 hover:opacity-100 text-black w-fit`} onClick={handleSortByPrice}>
                                    {sortBy !== 'price-asc' ? 
                                    <IoIosArrowRoundUp className={`text-xl ml-2 ${sortBy === '' ? 'text-gray-500' : ''}`}/> :
                                    <IoIosArrowRoundDown className="text-xl ml-2" />}
                                </button>
                            </th>

                            <th className="py-3 px-6 text-left">Price
                                <button className={`opacity-0 hover:opacity-100 text-black w-fit`} onClick={handleSortByPrice}>
                                    {sortBy !== 'price-asc' ? 
                                    <IoIosArrowRoundUp className={`text-xl ml-2 ${sortBy === '' ? 'text-gray-500' : ''}`}/> :
                                    <IoIosArrowRoundDown className="text-xl ml-2" />}
                                </button>
                            </th>
                            <th className="py-3 px-6 text-left">Qty
                                <button className={`opacity-0 hover:opacity-100 text-black w-fit`} onClick={handleSortByPrice}>
                                    {sortBy !== 'price-asc' ? 
                                    <IoIosArrowRoundUp className={`text-xl ml-2 ${sortBy === '' ? 'text-gray-500' : ''}`}/> :
                                    <IoIosArrowRoundDown className="text-xl ml-2" />}
                                </button>
                            </th>
                            <th className="py-3 px-6 text-left">Actions
                                <button className={`opacity-0 hover:opacity-100 text-black w-fit`} onClick={handleSortByPrice}>
                                    {sortBy !== 'price-asc' ? 
                                    <IoIosArrowRoundUp className={`text-xl ml-2 ${sortBy === '' ? 'text-gray-500' : ''}`}/> :
                                    <IoIosArrowRoundDown className="text-xl ml-2" />}
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {/* {data && filteredAndSortedData.map((data) => ( */}
                        {data && currentProducts.map((data)=>(
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
                    </tbody>
                </table>
                <div className="sticky bottom-0 bg-white py-4">
                
                    <ul className="flex justify-end mt-4 text-sm">
                        <li>
                            <span className="mr-4 text-sm">Rows Per Page: </span> 
                            <select
                                className="bg-transparent"
                                value={productsPerPage}
                                onChange={e => {
                                setProductsPerPage(parseInt(e.target.value));
                                setDataPerPage(parseInt(e.target.value))
                                setCurrentPage(1); // Reset to first page when changing rows per page
                                }}
                            > 
                                <option value="5">5 </option>
                                <option value="10">10</option>
                            </select>
                        </li>
                        <li>
                            <p className="ml-10 mr-4 text-sm">
                                    {indexOfFirstProduct + 1} -{' '}
                                    {Math.min(indexOfLastProduct, filteredProducts?.length)} of {filteredProducts?.length}
                            </p>
                        </li>
                        <li>
                            <button
                                className={`mr-2 text-lg `}
                                // ${pageNumber + 1 === currentPage ? 'bg-blue-500 text-white' : ''}
                                
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                <MdOutlineNavigateBefore />
                            </button>
                        </li>
                        <li>
                            <button
                                className={`text-lg mr-6 `}
                                // ${pageNumber + 1 === currentPage ? 'bg-blue-500 text-white' : ''}
                                
                                onClick={() => paginate(currentPage + 1)}
                                disabled={indexOfLastProduct >= filteredProducts?.length}
                            >
                                <MdOutlineNavigateNext />
                            </button>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </>)

}

export default DataTable;