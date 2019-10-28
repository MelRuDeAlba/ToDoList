import React  from 'react';
import styled from 'styled-components';

const ListsContainer = styled.div`
    font-size: 15px;
    padding: 2em 1em;
`;

const ListsH2 = styled.h2`
    font-weight: 600;
    letter-spacing: .8px;
    color: #0a0a3b;
    text-transform: uppercase;
    border-bottom: 1px solid #0a0a3b;
    margin: 1em 0 .5em 0;
`;

const ListsAdd = styled.div`
    margin: 0 0 1em 0;
    .btn {
        background-color:  #6957ff;
        cursor: pointer;
        i {
            color: #FFF;
        }
        &:focus {
            outline: 0;
            box-shadow:none;
        }
        &:hover {
            i {
                color: #00ff94;
            }
           
        }
    }
    input {
        &:focus {
            outline: 0;
            box-shadow:none;
            border-color: #0a0a3b;
        }
    }
`;

const ListsUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const ListsItem = styled.li`
    padding: .5em 1em;
    margin: 1em 0 0 0;
    font-weight: 600;
    text-transform: uppercase;
    background-color:  #0a0a3b;
    color: #FFF;
    line-height: 30px;
    i{
        float: right;
        font-size: 30px;
        cursor: pointer;
        margin: 0 10px;
        &:hover {
            color: #00ff94;
        }
    }
`;

const ListsSubItem = styled.li`
    padding: .5em 0 .5em 2em;
    margin: 0;
    font-weight: 600;
    color: #6957ff
`;

 class Lists extends React.Component {
    
    constructor(props) {
        super(props);
        this.addNew = this.addNew.bind(this);
        this.state = { 
            toDoList: [
                {
                    'Study': [
                        'math',
                        'english'
                    ]            
                },
                {
                    'Laundry': []            
                },
                {
                    'Call Ming': []            
                },
                {
                    'Read': [
                        'The name of the wind',
                        'Throne of Glass',
                        'Game of thrones'
                    ]            
                },
            ],
            addNew: '',
        }
    }

    renderSubList(items){
        return items.map( (subItem) => <ListsSubItem key={subItem}>{subItem}</ListsSubItem>)
    }

    renderListItems() {
        let mthis =this;
        return this.state.toDoList.map((function(item) {
            var key = Object.keys(item)[0];                              
            return (
                <React.Fragment  key={key}>
                    <ListsItem>{key} <i onClick={() => mthis.deleteElement(key)} className="fas fa-trash-alt"></i> <i onClick={() => mthis.addSubList(key)} className="fas fa-plus-square"></i></ListsItem>
                    <ListsUl>
                        {mthis.renderSubList(item[key])}
                    </ListsUl> 
                </React.Fragment>
            )              
        }))
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
           this.addNew();
        }
    }

    addNew() {
        var inList = this.state.toDoList.find(obj => Object.keys(obj)[0] === this.state.addNew);
        if(inList) {
            alert('Ya agregaste ese elemento :P')
        } else {
            let newNode =  new Object();
            newNode[this.state.addNew] = [];        
            if(this.state.addNew) {       
                this.setState({
                    toDoList: [
                        ...this.state.toDoList,
                        newNode
                    ],
                    addNew: '',                 
                })
            }
        }
    }

    addSubList(item) {
        
        alert(item);
    }

    deleteElement(item){
        let newList = this.state.toDoList.filter(function( obj ) {
            var key = Object.keys(obj)[0];           
            return key !== item;
        });
        this.setState({toDoList: newList})
    }

    render() {
        return (
            <ListsContainer className="container">
                <ListsH2>To do list </ListsH2>
                <ListsAdd className="input-group">
                    <input value={this.state.addNew} onKeyDown={this.handleKeyDown} onChange={(e) => this.setState({addNew: e.target.value })} type="text" className="form-control" placeholder="New task"/>
                    <div className="input-group-append">
                        <button className="btn" type="button" onClick={this.addNew}><i className="fas fa-plus-square"></i></button>
                    </div>                    
                </ListsAdd>
                
                <ListsUl>
                    {this.renderListItems()}
                </ListsUl>                
            </ListsContainer>    
        );
    }
 }

export default Lists;