import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from './layouts/Card';
import Bar from './layouts/Bar';
import AddForm from './AddForm';

export default class Orders extends React.Component{
    state = {
        id: 1,
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
        ]
    }

    addOrder(obj, func){
        const order = {};
        order.id = this.state.id;
        order.name = obj.name;
        order.desc = obj.desc;
        order.img = obj.img;
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

    render(){
        return(
            <Grid container>
                <Grid md={1} />
                    <Grid xs={12} sm={12} md={10}>
                        <Bar color='green' title='Orders Counter'
                            button={<AddForm title='Add New Order' desc='Specify order details.' handle={this.addOrder.bind(this)}/>}
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
                            />
                        })}
                        </div>
                    </Grid>
                <Grid md={1} />
          </Grid>
        );
    }
}