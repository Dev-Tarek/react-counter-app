import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from './layouts/Card';
import Bar from './layouts/Bar';
import AddForm from './AddForm';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class Orders extends React.Component{
    state = {
        id: 1,
        thumbOption: true,
        orders: [
            {
                id: 0,
                name: 'Hot Pizza',
                desc: 'Pizza with cheese, meat and hot sauce.',
                count: 3,
                img: 'static/imgs/cards/pizza.jpg'
            },
            {
                id: 1,
                name: 'Burger',
                desc: 'Rich burger with cheese and onions.',
                count: 10,
                img: 'static/imgs/cards/cheeseBurger.jpg'
            },
            {
                id: 2,
                name: 'Oven Pasta',
                desc: 'Delicious oven pasta the Egyptian way.',
                count: 5,
                img: 'static/imgs/cards/ovenPasta.jpeg'
            },
            {
                id: 3,
                name: 'Normal Pizza',
                desc: 'Pizza with cheese, meat and normal sauce.',
                count: 1,
                img: 'static/imgs/cards/pizza.jpg'
            },
            {
                id: 4,
                name: 'Ketchup Burger',
                desc: 'Some extra ketchup in this burger.',
                count: 3,
                img: 'static/imgs/cards/cheeseBurger.jpg'
            },
            {
                id: 5,
                name: 'Ketchup Burger XL',
                desc: 'XL burger, two rows of meat.',
                count: 1,
                img: 'static/imgs/cards/cheeseBurger.jpg'
            },
        ]
    }

    addOrder(obj, func){
        const order = {};
        order.id = this.state.id;
        order.name = obj.name;
        order.desc = obj.desc;
        order.img = obj.img || 'static/imgs/cards/order.jpg';
        order.count = obj.count;
        const orders = [...this.state.orders];
        orders.push(order);
        console.log(order);
        this.setState({
            orders: orders
        })
        func();
    }

    removeOrder(id){
        let updatedOrders = [...this.state.orders];
        let index = -1;
        for(let i in updatedOrders){
            if(updatedOrders[i].id === id){
                index = i;
                break;
            }
        }
        if(index === -1) return;
        updatedOrders.splice(index, 1);
        this.setState({
            orders: updatedOrders
        });
    }

    thumbToggle(){
        const thumb = this.state.thumbOption;
        this.setState({
            thumbOption: !thumb,
        });
    }

    render(){
        return(
            <Grid container>
                <Grid item md={1} />
				<Grid item xs={12} sm={12} md={10}>
					<Bar color='green' title='Orders Counter'
                        button={<AddForm title='Add New Order' desc='Specify order details.' handle={this.addOrder.bind(this)}/>}
                        thumbToggle={
                            <FormControlLabel
                                style={{marginLeft: 'auto'}}
                                control={
                                    <Checkbox 
                                        checked={this.state.thumbOption}
                                        color="default"
                                        label="Thumbnail"
                                        onChange={this.thumbToggle.bind(this)}
                                    />}
                                label="Thumbnails"
                            />}
					/>
					<div style={{backgroundColor: 'rgba(255,255,255,0.5)'}}>
					{this.state.orders.map((item) => {
						return <Card 
							key={item.id}
							cardId={item.id}
							cardName={item.name}
							cardDesc={item.desc}
							cardImg={item.img}
							cardCount={item.count}
                            delete={this.removeOrder.bind(this)}
                            thumb={this.state.thumbOption}
						/>
					})}
					</div>
				</Grid>
                <Grid item md={1} />
          </Grid>
        );
    }
}