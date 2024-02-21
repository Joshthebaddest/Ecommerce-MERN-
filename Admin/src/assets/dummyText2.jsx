import { BsBoxSeam } from 'react-icons/bs';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { FiBarChart } from 'react-icons/fi';
import { HiOutlineRefresh } from 'react-icons/hi';

export const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


  export const earningData = [
    {
      icon: <MdOutlineSupervisorAccount />,
      amount: '39,354',
      percentage: '-4%',
      title: 'Customers',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'red-600',
    },
    {
      icon: <BsBoxSeam />,
      amount: '4,396',
      percentage: '+23%',
      title: 'Products',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: 'rgb(254, 201, 15)',
      pcColor: 'green-600',
    },
    {
      icon: <FiBarChart />,
      amount: '423,39',
      percentage: '+38%',
      title: 'Sales',
      iconColor: 'rgb(228, 106, 118)',
      iconBg: 'rgb(255, 244, 229)',
  
      pcColor: 'green-600',
    },
    {
      icon: <HiOutlineRefresh />,
      amount: '39,354',
      percentage: '-12%',
      title: 'Refunds',
      iconColor: 'rgb(0, 194, 146)',
      iconBg: 'rgb(235, 250, 242)',
      pcColor: 'red-600',
    },
  ];

  export const ordersGrid = [
    // {
    //   headerText: 'ID',
    //   // template: gridOrderImage,
    //   textAlign: 'Center',
    //   width: '120',
    // },
    {
      headerText: 'Image',
      field: 'Image',
      // template: gridOrderImage,
      textAlign: 'Center',
      width: '120',
    },
    {
      field: 'OrderItems',
      headerText: 'Item',
      width: '150',
      editType: 'dropdownedit',
      textAlign: 'Center',
    },
    { field: 'CustomerName',
      headerText: 'Customer Name',
      width: '150',
      textAlign: 'Center',
    },
    {
      field: 'TotalAmount',
      headerText: 'Total Amount',
      format: 'C2',
      textAlign: 'Center',
      editType: 'numericedit',
      width: '150',
    },
    {
      headerText: 'Status',
      // template: gridOrderStatus,
      field: 'Status',
      textAlign: 'Center',
      width: '120',
    },
    {
      field: 'OrderID',
      headerText: 'Order ID',
      width: '120',
      textAlign: 'Center',
    },
  
    {
      field: 'Location',
      headerText: 'Location',
      width: '150',
      textAlign: 'Center',
    },
  ];

  export const ordersData = [
    {
      OrderID: 10248,
      CustomerName: 'Vinet',
  
      TotalAmount: 32.38,
      OrderItems: 'Fresh Tomato',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      // ProductImage:
      //   product6,
    },
    {
      OrderID: 345653,
      CustomerName: 'Carson Darrin',
      TotalAmount: 56.34,
      OrderItems: 'Butter Scotch',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      // ProductImage:
      //   product5,
    },
    {
      OrderID: 390457,
      CustomerName: 'Fran Perez',
      TotalAmount: 93.31,
      OrderItems: 'Candy Gucci',
      Location: 'New York',
      Status: 'active',
      StatusBg: '#03C9D7',
      // ProductImage:
      //   product7,
    },
    {
      OrderID: 893486,
      CustomerName: 'Anika Viseer',
      TotalAmount: 93.31,
      OrderItems: 'Night Lamp',
      Location: 'Germany',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      // ProductImage:
      //   product4,
    },
    {
      OrderID: 748975,
      CustomerName: 'Miron Vitold',
      TotalAmount: 23.99,
      OrderItems: 'Healthcare Erbology',
      Location: 'Spain',
      Status: 'rejected',
      StatusBg: 'red',
      // ProductImage:
      // product1,
    },
    {
      OrderID: 94757,
      CustomerName: 'Omar Darobe',
      TotalAmount: 95.99,
      OrderItems: 'Makeup Lancome Rouge',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      // ProductImage:
      //   product2,
    },
    {
      OrderID: 944895,
      CustomerName: 'Lulia albu',
      TotalAmount: 17.99,
      OrderItems: 'Skincare',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      // ProductImage:
      //   product3,
    },
    {
      OrderID: 845954,
      CustomerName: 'Penjani',
      TotalAmount: 59.99,
      OrderItems: 'Headphone',
      Location: 'USA',
      Status: 'complete',
      StatusBg: '#8BE78B',
      // ProductImage:
      //   product4,
    },
    {
      OrderID: 845954,
      CustomerName: 'Jie Yan',
      TotalAmount: 87.99,
      OrderItems: 'Shoes',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      // ProductImage:
      //   'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      // ProductImage:
      //   'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 38489,
      CustomerName: 'Miron',
      TotalAmount: 87.99,
      OrderItems: 'Ice Cream',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      // ProductImage:
      //   'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
      OrderID: 24546,
      CustomerName: 'Frank',
      TotalAmount: 84.99,
      OrderItems: 'Pan Cake',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      // ProductImage:
      //   'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      // ProductImage:
      //   'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 10248,
      CustomerName: 'Vinet',
  
      TotalAmount: 32.38,
      OrderItems: 'Fresh Tomato',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      // ProductImage:
      //   product6,
    },
    {
      OrderID: 345653,
      CustomerName: 'Carson Darrin',
      TotalAmount: 56.34,
      OrderItems: 'Butter Scotch',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      // ProductImage:
      //   product5,
    },
    {
      OrderID: 390457,
      CustomerName: 'Fran Perez',
      TotalAmount: 93.31,
      OrderItems: 'Candy Gucci',
      Location: 'New York',
      Status: 'active',
      StatusBg: '#03C9D7',
      // ProductImage:
      //   product7,
    },
    {
      OrderID: 893486,
      CustomerName: 'Anika Viseer',
      TotalAmount: 93.31,
      OrderItems: 'Night Lamp',
      Location: 'Germany',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      // ProductImage:
      //   product4,
    },
    {
      OrderID: 748975,
      CustomerName: 'Miron Vitold',
      TotalAmount: 23.99,
      OrderItems: 'Healthcare Erbology',
      Location: 'Spain',
      Status: 'rejected',
      StatusBg: 'red',
      // ProductImage:
      //   product1,
    },
    {
      OrderID: 94757,
      CustomerName: 'Omar Darobe',
      TotalAmount: 95.99,
      OrderItems: 'Makeup Lancome Rouge',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      // ProductImage:
      //   product2,
    },
    {
      OrderID: 944895,
      CustomerName: 'Lulia albu',
      TotalAmount: 17.99,
      OrderItems: 'Skincare',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      // ProductImage:
      //   product3,
    },
    {
      OrderID: 845954,
      CustomerName: 'Penjani',
      TotalAmount: 59.99,
      OrderItems: 'Headphone',
      Location: 'USA',
      Status: 'complete',
      StatusBg: '#8BE78B',
      // ProductImage:
      //   product4,
    },
    {
      OrderID: 845954,
      CustomerName: 'Jie Yan',
      TotalAmount: 87.99,
      OrderItems: 'Shoes',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      // ProductImage:
      //   'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      // ProductImage:
      //   'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 38489,
      CustomerName: 'Miron',
      TotalAmount: 87.99,
      OrderItems: 'Ice Cream',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      // ProductImage:
      //   'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
      OrderID: 24546,
      CustomerName: 'Frank',
      TotalAmount: 84.99,
      OrderItems: 'Pan Cake',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      // ProductImage:
      //   'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      // ProductImage:
      //   'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 10248,
      CustomerName: 'Vinet',
  
      TotalAmount: 32.38,
      OrderItems: 'Fresh Tomato',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      // ProductImage:
      //   product6,
    },
    {
      OrderID: 345653,
      CustomerName: 'Carson Darrin',
      TotalAmount: 56.34,
      OrderItems: 'Butter Scotch',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      // ProductImage:
      //   product5,
    },
    {
      OrderID: 390457,
      CustomerName: 'Fran Perez',
      TotalAmount: 93.31,
      OrderItems: 'Candy Gucci',
      Location: 'New York',
      Status: 'active',
      StatusBg: '#03C9D7',
      // ProductImage:
      //   product7,
    },
    {
      OrderID: 893486,
      CustomerName: 'Anika Viseer',
      TotalAmount: 93.31,
      OrderItems: 'Night Lamp',
      Location: 'Germany',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      // ProductImage:
      //   product4,
    },
    {
      OrderID: 748975,
      CustomerName: 'Miron Vitold',
      TotalAmount: 23.99,
      OrderItems: 'Healthcare Erbology',
      Location: 'Spain',
      Status: 'rejected',
      StatusBg: 'red',
      // ProductImage:
      //   product1,
    },
    {
      OrderID: 94757,
      CustomerName: 'Omar Darobe',
      TotalAmount: 95.99,
      OrderItems: 'Makeup Lancome Rouge',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      // ProductImage:
      //   product2,
    },
    {
      OrderID: 944895,
      CustomerName: 'Lulia albu',
      TotalAmount: 17.99,
      OrderItems: 'Skincare',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      // ProductImage:
      //   product3,
    },
    {
      OrderID: 845954,
      CustomerName: 'Penjani',
      TotalAmount: 59.99,
      OrderItems: 'Headphone',
      Location: 'USA',
      Status: 'complete',
      StatusBg: '#8BE78B',
      // ProductImage:
      //   product4,
    },
    {
      OrderID: 845954,
      CustomerName: 'Jie Yan',
      TotalAmount: 87.99,
      OrderItems: 'Shoes',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      // ProductImage:
      //   'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      // ProductImage:
      //   'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 38489,
      CustomerName: 'Miron',
      TotalAmount: 87.99,
      OrderItems: 'Ice Cream',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      // ProductImage:
      //   'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
      OrderID: 24546,
      CustomerName: 'Frank',
      TotalAmount: 84.99,
      OrderItems: 'Pan Cake',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      // ProductImage:
      //   'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      // ProductImage:
      //   'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 10248,
      CustomerName: 'Vinet',
  
      TotalAmount: 32.38,
      OrderItems: 'Fresh Tomato',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      // ProductImage:
      //   product6,
    },
    {
      OrderID: 345653,
      CustomerName: 'Carson Darrin',
      TotalAmount: 56.34,
      OrderItems: 'Butter Scotch',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      // ProductImage:
      //   product5,
    },
    {
      OrderID: 390457,
      CustomerName: 'Fran Perez',
      TotalAmount: 93.31,
      OrderItems: 'Candy Gucci',
      Location: 'New York',
      Status: 'active',
      StatusBg: '#03C9D7',
      // ProductImage:
      //   product7,
    },
    {
      OrderID: 893486,
      CustomerName: 'Anika Viseer',
      TotalAmount: 93.31,
      OrderItems: 'Night Lamp',
      Location: 'Germany',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      // ProductImage:
      //   product4,
    },
    {
      OrderID: 748975,
      CustomerName: 'Miron Vitold',
      TotalAmount: 23.99,
      OrderItems: 'Healthcare Erbology',
      Location: 'Spain',
      Status: 'rejected',
      StatusBg: 'red',
      // ProductImage:
      //   product1,
    },
    {
      OrderID: 94757,
      CustomerName: 'Omar Darobe',
      TotalAmount: 95.99,
      OrderItems: 'Makeup Lancome Rouge',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      // ProductImage:
      //   product2,
    },
    {
      OrderID: 944895,
      CustomerName: 'Lulia albu',
      TotalAmount: 17.99,
      OrderItems: 'Skincare',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      // ProductImage:
      //   product3,
    },
    {
      OrderID: 845954,
      CustomerName: 'Penjani',
      TotalAmount: 59.99,
      OrderItems: 'Headphone',
      Location: 'USA',
      Status: 'complete',
      StatusBg: '#8BE78B',
      // ProductImage:
      //   product4,
    },
    {
      OrderID: 845954,
      CustomerName: 'Jie Yan',
      TotalAmount: 87.99,
      OrderItems: 'Shoes',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      // ProductImage:
      //   'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      // ProductImage:
      //   'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 38489,
      CustomerName: 'Miron',
      TotalAmount: 87.99,
      OrderItems: 'Ice Cream',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      // ProductImage:
      //   'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
      OrderID: 24546,
      CustomerName: 'Frank',
      TotalAmount: 84.99,
      OrderItems: 'Pan Cake',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      // ProductImage:
      //   'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      // ProductImage:
      //   'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 10248,
      CustomerName: 'Vinet',
  
      TotalAmount: 32.38,
      OrderItems: 'Fresh Tomato',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      // ProductImage:
      //   product6,
    },
    {
      OrderID: 345653,
      CustomerName: 'Carson Darrin',
      TotalAmount: 56.34,
      OrderItems: 'Butter Scotch',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      // ProductImage:
      //   product5,
    },
    {
      OrderID: 390457,
      CustomerName: 'Fran Perez',
      TotalAmount: 93.31,
      OrderItems: 'Candy Gucci',
      Location: 'New York',
      Status: 'active',
      StatusBg: '#03C9D7',
      // ProductImage:
      //   product7,
    },
    {
      OrderID: 893486,
      CustomerName: 'Anika Viseer',
      TotalAmount: 93.31,
      OrderItems: 'Night Lamp',
      Location: 'Germany',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      // ProductImage:
      //   product4,
    },
    {
      OrderID: 748975,
      CustomerName: 'Miron Vitold',
      TotalAmount: 23.99,
      OrderItems: 'Healthcare Erbology',
      Location: 'Spain',
      Status: 'rejected',
      StatusBg: 'red',
      // ProductImage:
      //   product1,
    },
    {
      OrderID: 94757,
      CustomerName: 'Omar Darobe',
      TotalAmount: 95.99,
      OrderItems: 'Makeup Lancome Rouge',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      // ProductImage:
      //   product2,
    },
    {
      OrderID: 944895,
      CustomerName: 'Lulia albu',
      TotalAmount: 17.99,
      OrderItems: 'Skincare',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      // ProductImage:
      //   product3,
    },
    {
      OrderID: 845954,
      CustomerName: 'Penjani',
      TotalAmount: 59.99,
      OrderItems: 'Headphone',
      Location: 'USA',
      Status: 'complete',
      StatusBg: '#8BE78B',
      // ProductImage:
      //   product4,
    },
    {
      OrderID: 845954,
      CustomerName: 'Jie Yan',
      TotalAmount: 87.99,
      OrderItems: 'Shoes',
      Location: 'USA',
      Status: 'pending',
      StatusBg: '#FB9678',
      // ProductImage:
      //   'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      // ProductImage:
      //   'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
      OrderID: 38489,
      CustomerName: 'Miron',
      TotalAmount: 87.99,
      OrderItems: 'Ice Cream',
      Location: 'USA',
      Status: 'active',
      StatusBg: '#03C9D7',
      // ProductImage:
      //   'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
      OrderID: 24546,
      CustomerName: 'Frank',
      TotalAmount: 84.99,
      OrderItems: 'Pan Cake',
      Location: 'Delhi',
      Status: 'complete',
      StatusBg: '#8BE78B',
      // ProductImage:
      //   'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
      OrderID: 874534,
      CustomerName: 'Danai',
      TotalAmount: 122.99,
      OrderItems: 'Watch',
      Location: 'USA',
      Status: 'canceled',
      StatusBg: '#FF5C8E',
      // ProductImage:
      //   'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
  ];

  export const employeesData = [
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      // avatar3,
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      // avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      // avatar,
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      // avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      // avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      // avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      // avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      // avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar2,
    },
    {
      EmployeeID: 1,
      Name: 'Nancy Davolio',
      Title: 'Sales Representative',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      // avatar2,
  
    },
    {
      EmployeeID: 2,
      Name: 'Nasimiyu Danai',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar3,
    },
    {
      EmployeeID: 3,
      Name: 'Iulia Albu',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar4,
    },
    {
      EmployeeID: 4,
      Name: 'Siegbert Gottfried',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar2,
    },
    {
      EmployeeID: 5,
      Name: 'Omar Darobe',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar,
    },
    {
      EmployeeID: 4,
      Name: 'Penjani Inyene',
      Title: 'Marketing Head',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar,
    },
    {
      EmployeeID: 5,
      Name: 'Miron Vitold',
      Title: 'HR',
      HireDate: '01/02/2021',
      Country: 'USA',
      ReportsTo: 'Carson',
      // EmployeeImage:
      //   avatar2,
    },
  ];
  
  export const employeesGrid = [
    { headerText: 'Employee',
      width: '150',
      // template: gridEmployeeProfile,
      textAlign: 'Center' },
    { field: 'Name',
      headerText: '',
      width: '0',
      textAlign: 'Center',
    },
    { field: 'Title',
      headerText: 'Designation',
      width: '170',
      textAlign: 'Center',
    },
    { headerText: 'Country',
      width: '120',
      textAlign: 'Center',
      // template: gridEmployeeCountry 
    },
  
    { field: 'HireDate',
      headerText: 'Hire Date',
      width: '135',
      format: 'yMd',
      textAlign: 'Center' },
  
    { field: 'ReportsTo',
      headerText: 'Reports To',
      width: '120',
      textAlign: 'Center' },
    { field: 'EmployeeID',
      headerText: 'Employee ID',
      width: '125',
      textAlign: 'Center' },
  ];

