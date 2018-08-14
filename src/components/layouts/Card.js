import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  card: {
    maxWidth: 330,
    width: '320px',
    minHeight: '340px'
  },
  cardDiv: {
    margin: '10px',
    boxShadow: '0px 2px 3px 0px', 
    display: 'inline-flex',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  counterBlock: {
    marginLeft: 'auto',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'blue',
    border: '1px solid #999',
    margin: 10,
    padding: 13,
    borderRadius: '4px'
  },
  textDone: {
    textDecoration: 'line-through',
  },
  cardDone: {
    maxWidth: 330,
    width: '320px',
    minHeight: '340px',
    backgroundColor: 'rgba(255,255,255,.5)'
  }
};

class CounterCard extends React.Component {
    state = {
        count: this.props.cardCount,
        name: this.props.cardName,
        img: this.props.cardImg,
        desc: this.props.cardDesc,
        id: this.props.cardId,
    }

    increase(){
        let value = this.state.count;
        value++;
        this.setState({count: value});
    }

    decrease(){
        let value = this.state.count;
        value = --value < 0 ? 0 : value;
        this.setState({count: value});
    }

    render(){
    const { classes } = this.props;
    const delButton = (<Button 
            variant="fab" color="default" aria-label="Sub" mini onClick={()=>this.props.delete(this.state.id)}>
            <DeleteIcon />
        </Button>)
    return (
        <div className={classes.cardDiv}>
        <Card className={this.state.count?classes.card:classes.cardDone}>
            <CardMedia
            className={classes.media}
            image={this.state.img}
            title="Order Image"
            />
            <CardContent>
            <Typography gutterBottom variant="headline" component="h2" className={this.state.count?null:classes.textDone}>
                {this.state.name}
            </Typography>
            <Typography component="p" className={this.state.count?null:classes.textDone}>
                {this.state.desc}
            </Typography>
            </CardContent>
            <CardActions>
                <Button variant="fab" color="primary" aria-label="Add" mini className={classes.button} onClick={this.increase.bind(this)}> 
                    <AddIcon />
                </Button>
                <Button variant="fab" color="secondary" aria-label="Sub" mini className={classes.button} onClick={this.decrease.bind(this)}> 
                    <RemoveIcon />
                </Button>
                {this.state.count?null:delButton}
                <div className={classes.counterBlock}>{this.state.count}</div>
            </CardActions>
        </Card>
        </div>
        );
    }
}

CounterCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CounterCard);