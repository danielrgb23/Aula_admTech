import React , {useState, useEffect}from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { NotificationButton } from '../notificationButton';
import axios from 'axios';

import {Sale} from '../../models/sales';
import {BASE_URL} from '../../utils/request';
import './styles.css'

export function SalesCard() {
const date = new Date(new Date()
.setDate(new Date().getDate() - 365))

const [minDate, setMinDate] = useState(date);
const [maxDate, setMaxDate] = useState( new Date());

  return (
    <div>
        <div className='dsmeta-card'>
            <h2 className='dsmeta-sales-title'>Vendas</h2>
            <div>
                <div className='dsmeta-form-control-container'>
                    <DatePicker 
                    selected={minDate}
                    onChange={(date: Date) => setMinDate(date)}
                    className='dsmeta-form-control'
                    dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className='dsmeta-form-control-container'>
                    <DatePicker 
                    selected={maxDate}
                    onChange={(date: Date) => setMaxDate(date)}
                    className='dsmeta-form-control'
                    dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div>
                <table className='dsmeta-sales-table'>
                    <thead>
                        <tr>
                            <th className='show992'>ID</th>
                            <th className='show576'>Data</th>
                            <th >Vendedor</th>
                            <th className='show992'>Visitas</th>
                            <th className='show992'>Vendas</th>
                            <th>Total</th>
                            <th >Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='show992'>1</td>
                            <td className='show992'>{new Date().toLocaleDateString()}</td>
                            <td > Fulaninho</td>
                            <td className='show992'>Comprador</td>
                            <td className='show992'>12</td>
                            <td className='show992'>$50</td>
                            <td >
                                <div className='dsmeta-red-btn-container'>
                                         <NotificationButton saleId={1} />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
