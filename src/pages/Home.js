import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Menu from '../components/Menu';
import Text from '../text.json'
import { get_countries_all } from '../redux/Actions';
import { CSmartTable } from '@coreui/react-pro'


const Home = () => {
    const dispatch = useDispatch();
    const countries = useSelector( state => state.countries);
    const lenguage = useSelector( state => state.lenguage );
    const text = Text[lenguage].home;

    const [loading, setLoading] = useState(true);
    const column = [
        {
            key:"name",
            label:text.name
        },
        {
            key:"capital",
            label:text.capital
        },
        {
            key:"continent",
            label:text.continent
        },
        {
            key:"population",
            label:text.population
        },
        {
            key:"currency",
            label:text.currency
        }
    ]

    const COPYS =  Text[lenguage].home;

    useEffect(() => {
        get_countries_all(dispatch, setLoading);
    },[])

    return(
        <div className='position-relative d-flex flex-wrap'>
            <Menu/>
            <div className='col-md-10 col-12 container pb-3'>
                <div className='px-3 pt-4'>
                    <h1>{COPYS.title}</h1>
                </div>
                <CSmartTable
                    columns={column}
                    items={countries}
                    columnFilter
                    tableHeadProps={{
                        color: 'light',
                      }}
                    columnSorter
                    itemsPerPageSelect
                    loading={loading}
                    pagination
                    tableProps={{
                        hover: true,
                        responsive: true,
                    }}
                />
            </div>
        </div>
    );
}

export default Home;