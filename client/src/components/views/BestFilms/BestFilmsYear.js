import React, { useEffect, useState } from 'react'
import {Typography, Menu, Dropdown, Icon, Row, Select } from 'antd'
import GridCard from '../../commons/GridCards'
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE, POSTER_SIZE } from '../../Config'


const {Option } = Select;

const { Title } = Typography;
function BestFilmsYear() {
    

  const [MoviesYear, setMoviesYear] = useState([])
  const [Year, setYear] = useState(2010)
    



    
    
    useEffect(() => {
      
      fetchMovies(Year)
      MoviesYear.map(movie => {
        console.log(movie)
      })
      
      
    }, [Year])


    const fetchMovies = (year) => {
      const endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&primary_release_year=${year}&sort_by=revenue.desc`;
        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                 //console.log(result)
                 //console.log('Movies',...Movies)
                // console.log('result',...result.results)
                setMoviesYear([MoviesYear, ...result.results])
                
                
            })
            .catch(error => console.error('Error:', error)
            )
            
    }


    const change = (value) => {
      setYear(value)
    }


    return (

        <div>
            <div  align="center" padding="40px" margin="40px" >
               <Select id="lang" onChange={change} defaultValue={Year}>
                  <Option value="2010">2010</Option>
                  <Option value="2011">2011</Option>
                  <Option value="2012">2012</Option>
                  <Option value="2013">2013</Option>
                  <Option value="2014">2014</Option>
                  <Option value="2015">2015</Option>
                  <Option value="2016">2016</Option>
                  <Option value="2017">2017</Option>
                  <Option value="2018">2018</Option>
                  <Option value="2019">2019</Option>
                  <Option value="2020">2020</Option>
               </Select>
               
               
           </div>
            <div style={{ width: '85%', margin: '1rem auto' }}>

                <Title level={2} > Best Movies {Year} </Title>
                <hr />
                <Row gutter={[16, 16]}>
                    {MoviesYear && MoviesYear.slice(1).map((movie, index) => (
                      
                        <React.Fragment key={index}>
                            <GridCard
                                image={movie.poster_path ?
                                    `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                    : null}
                                movieId={movie.id}
                                movieName={movie.original_title}
                            />
                        </React.Fragment>
                        
                    ))}
                </Row>
                <br />
            </div>

        </div>

        
    )
}

export default BestFilmsYear
