import React from 'react';
import { MenuItem, SubHeading } from '../../components';
import { data } from '../../constants';
import './SpecialMenu.css';
const SpecialMenu = () => {
  return (
    <div className='app__specialMenu app_header flex__center section__padding' id='menu'>
        <div className='container' >
          <div className="app__specialMenu-title">
            <SubHeading title='Menu that fits you palatte'/>
            <h1 className='headtext__cormorant'>Today`s Special</h1>
          </div>

          <div className="app__specialMenu-menu">
            <div className=" app__specialMenu_item">
              <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
              <div className="app__specialMenu_menu_items">
                {data.wines.map((wine, index) => (
                  <MenuItem key={wine.title + index}  title = {wine.title} price = {wine.price} tags = {wine.tags}/>
                ))}
              </div>
            </div>
            <div className="  app__specialMenu_item">
              <p className='app__specialMenu-menu_heading'>Burgers</p>
              <div className="app__specialMenu_menu_items">
                {data.burgers.map((cocktail, index) => (
                  <MenuItem key={cocktail.title + index}  title = {cocktail.title} price= {cocktail.price} tags = {cocktail.tags}/>
                ))}
              </div>
            </div>
            <div className="  app__specialMenu_item">
              <p className='app__specialMenu-menu_heading'>Cocktails</p>
              <div className="app__specialMenu_menu_items">
                {data.cocktails.map((cocktail, index) => (
                  <MenuItem key={cocktail.title + index}  title = {cocktail.title} price= {cocktail.price} tags = {cocktail.tags}/>
                ))}
              </div>
            </div>
          </div>

          <div className='flex__center' style={{marginTop: '15px', paddingBottom:'3rem'}}>
            <button type='button' className='custom__button'>
              View More
            </button>
          </div>
        </div>
    </div>
  )
}

export default SpecialMenu