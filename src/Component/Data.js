import React, { useState } from 'react';
import Navbar from './Navbar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel, TableContainer, Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import DatePicker from '@mui/lab/DatePicker';

function Data() {

  const [data, setData] = useState([
    { id: 1, name: 'James Young', order: '123', orderDate: '24/Mar/2024', deliveryDate: '24/Apr/2024', status: 'Due', account: '$459', discount: '543' },
    { id: 2, name: 'Yash', order: '456', orderDate: '21/Mar/2024', deliveryDate: '2024-05-02', status: 'Pending', account: 'XYZ Inc', discount: '534' },
    { id: 3, name: 'Aman', order: '125', orderDate: '26/Mar/2024', deliveryDate: '26/Apr/2024', status: 'Delivered', account: '$590', discount: '430' },
    { id: 4, name: 'Rhoit', order: '126', orderDate: '27/Mar/2024', deliveryDate: '27/Apr/2024', status: 'Due', account: '$345', discount: '256' },
    { id: 5, name: 'Varun', order: '127', orderDate: '28/Mar/2024', deliveryDate: '28/Apr/2024', status: 'Pending', account: '$670', discount: '100' },
    { id: 6, name: 'Mohit', order: '128', orderDate: '29/Mar/2024', deliveryDate: '29/Apr/2024', status: 'Delivered', account: '$789', discount: '200' },
    { id: 7, name: 'Rajkumar', order: '129', orderDate: '30/Mar/2024', deliveryDate: '30/Apr/2024', status: 'Due', account: '$890', discount: '150' },
    { id: 8, name: 'Utkarsh', order: '130', orderDate: '31/Mar/2024', deliveryDate: '31/Apr/2024', status: 'Pending', account: '$490', discount: '560' },
    { id: 9, name: 'Prabhat', order: '131', orderDate: '01/Apr/2024', deliveryDate: '01/May/2024', status: 'Delivered', account: '$600', discount: '600' },
    { id: 10, name: 'Ava Taylor', order: '132', orderDate: '02/Apr/2024', deliveryDate: '02/May/2024', status: 'Due', account: '$700', discount: '700' },
    { id: 11, name: 'Prabhas', order: '133', orderDate: '03/Apr/2024', deliveryDate: '03/May/2024', status: 'Pending', account: '$800', discount: '800' },
    { id: 12, name: 'Ashral', order: '134', orderDate: '04/Apr/2024', deliveryDate: '04/May/2024', status: 'Delivered', account: '$900', discount: '900' },
  ]);



  // ----------total no. of status ------------
  
const pendingCount = data.reduce((count, row) => {
  if (row.status === 'Pending') {
    return count + 1;
  }
  return count;
}, 0);

const dueCount = data.reduce((count, row) => {
  if (row.status === 'Due') {
    return count + 1;
  }
  return count;
}, 0);

const deliveredCount = data.reduce((count, row) => {
  if (row.status === 'Delivered') {
    return count + 1;
  }
  return count;
}, 0);




  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: data.length+1,
    name: '',
    order: '',
    orderDate: '',
    deliveryDate: '',
    status: '',
    account: '',
    discount: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, formData]);
    console.log(formData)
    setOpen(false);
    setFormData({
      id: '',
      name: '',
      order: '',
      orderDate: '',
      deliveryDate: '',
      status: '',
      account: '',
      discount: ''
    });
  };



  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    setData((prevData) => prevData.sort((a, b) => {
      if (isAsc) {
        return a[property] > b[property] ? 1 : -1;
      } else {
        return a[property] < b[property] ? 1 : -1;
      }
    }));
  };

  return (
    <div >
          <Navbar  data={data} setOpen={setOpen}/>
          
          <div style={{ paddingLeft:"3%", gap: '6%', display: 'flex', justifyContent: "space-between", height: '3%'}}>
            <button style={{ float:"left",  cursor: "pointer", borderRadius: '6px', background: 'lightgrey', border: 'none' }}>All Orders   <span style={{background:"white"}}>  {data.length+1}</span></button>
            <button style={{ border: 'none',  cursor: "pointer", borderRadius: '6px', background: 'orange' }}>Pending Orders  <span style={{background:"white"}}>  {pendingCount}</span> </button>
            <button style={{ border: 'none',  cursor: "pointer", borderRadius: '6px', background: 'lightgreen' }}>Delivered Orders  <span style={{background:"white"}}>  {deliveredCount}</span> </button>
            <button style={{ border: 'none',  cursor: "pointer", borderRadius: '6px', background: 'pink' }}>Due Orders  <span style={{background:"white"}}>  {dueCount}</span> </button>
          </div>
          <Divider style={{ paddingTop: '12px', paddingLeft: '12px'}} />
          
          
          <div style={{ paddingLeft: '3%' }}>
            <span style={{  cursor: "pointer" ,fontSize: '12px' }} > <PersonIcon /> Vendor Name  <ArrowDropDownIcon />       </span>
            <span style={{  cursor: "pointer" ,fontSize: '12px' }} > <CalendarTodayIcon /> Delivery Date <ArrowDropDownIcon />             </span>
            <span style={{  cursor: "pointer" ,fontSize: '12px' }} > <CalendarTodayIcon /> Order Date <ArrowDropDownIcon /> </span>
            {/* <span style={{  cursor: "pointer" ,fontSize: '12px', float: 'right', paddingLeft:"90%" }} > <FilterAltIcon /> Filter <ArrowDropDownIcon /> </span> */}
          </div><br/>


          <div >
              <TableContainer>
                  <Table style={{}}>
                    <TableHead style={{ background: 'rgb(148, 80, 80)' }}>
                      <TableRow>

                        <TableCell>
                          <TableSortLabel
                            active={orderBy === 'id'}
                            direction={orderBy === 'id' ? order : 'asc'}
                            onClick={() => handleSort('id')}
                          >
                            Sr. no.
                          </TableSortLabel>
                        </TableCell>

                        <TableCell>
                          <TableSortLabel
                            active={orderBy === 'name'}
                            direction={orderBy === 'name' ? order : 'asc'}
                            onClick={() => handleSort('name')}
                          >
                            Customers
                          </TableSortLabel>
                        </TableCell>

                        <TableCell>
                          <TableSortLabel
                              active={orderBy === 'order'}
                              direction={orderBy === 'order' ? order : 'asc'}
                              onClick={() => handleSort('order')}
                            >
                            Order Id
                          </TableSortLabel>   
                        </TableCell>
                        
                        <TableCell> Order Date </TableCell>

                        <TableCell>Delivery Date</TableCell>

                        <TableCell >
                          <TableSortLabel
                              active={orderBy === 'status'}
                              direction={orderBy === 'status' ? order : 'asc'}
                              onClick={() => handleSort('status')}
                          >
                             Status
                          </TableSortLabel>   
                        </TableCell>

                        <TableCell>
                          <TableSortLabel
                                active={orderBy === 'account'}
                                direction={orderBy === 'account' ? order : 'asc'}
                                onClick={() => handleSort('account')}
                            >
                            Account
                          </TableSortLabel>  
                        </TableCell>

                        <TableCell>
                          <TableSortLabel
                                active={orderBy === 'discount'}
                                direction={orderBy === 'discount' ? order : 'asc'}
                                onClick={() => handleSort('discount')}
                            >
                            Discount
                            </TableSortLabel>
                        </TableCell>
                      </TableRow>
                    </TableHead>

                      <TableBody>
                        {data.map((row) => (
                          <TableRow key={row.id} style={{background:"lightyellow", borderRadius: "3px"}}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.order}</TableCell>
                            <TableCell>{row.orderDate}</TableCell>
                            <TableCell>{row.deliveryDate}</TableCell>
                            <TableCell>
                              <button style={{
                                  padding:"3%" , textAlign:"center", border: "none", borderRadius: "3px",
                                  backgroundColor: row.status === "Due" ? "pink" : row.status === "Pending" ? "orange" : row.status === "Delivered" ? "lightgreen" : "white"
                              }}>{row.status} </button>
                            
                            </TableCell>
                            <TableCell>{row.account}</TableCell>
                            <TableCell>{row.discount}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                  </Table> 
              </TableContainer>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Add Data</DialogTitle>
                    <DialogContent>
                        <form onSubmit={handleSubmit}>
                          {/* <TextField name="id" label="ID" value={formData.id} onChange={handleChange} fullWidth /> */}
                          <TextField name="name" label="Name" value={formData.name} onChange={handleChange} fullWidth />
                          <TextField name="order" label="OrderId" value={formData.order} onChange={handleChange} fullWidth />
                          <TextField name="orderDate" label="OrderDate" value={formData.orderDate} onChange={handleChange} fullWidth />
                          <TextField name="deliveryDate" label="DeliveryDate" value={formData.deliveryDate} onChange={handleChange} fullWidth />
                          <TextField name="status" label="Status" value={formData.status} onChange={handleChange} fullWidth />
                          <TextField name="account" label="Account" value={formData.account} onChange={handleChange} fullWidth />
                          <TextField name="discount" label="Discount" value={formData.discount} onChange={handleChange} fullWidth /> <TextField name="status" label="Status" value={formData.status} onChange={handleChange} fullWidth />
                          <Button type="submit">Submit</Button>
                        </form>
                      </DialogContent>
             </Dialog>

          </div>
    </div>
  )
}

export default Data
