import React  from 'react';
import styled from 'styled-components';

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
    .input-group {
        padding: 1em;
        margin: 0;
    }
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

 class ListsItems extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            showNew: false,
            addNew: '',
        }
    }

    renderSubList(items){
        return items.map( (subItem,index) => <ListsSubItem key={subItem+index}>{subItem}</ListsSubItem>)
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.addSubList(this.props.name, this.state.addNew);
            this.setState({addNew: ''});
        }
    }

    handlePressButton = () => {
        this.props.addSubList(this.props.name, this.state.addNew);
        this.setState({addNew: ''});
    }

    render() {
        return (
            <React.Fragment>
                <ListsItem>{this.props.name} 
                    <i onClick={() => this.props.deleteElement(this.props.name)} className="fas fa-trash-alt"></i> 
                    <i onClick={() => this.setState({showNew: !this.state.showNew})} className={"fas "+ (this.state.showNew ? "fa-minus-square" : "fa-plus-square")}></i>
                </ListsItem>
                <ListsUl>
                    {this.state.showNew &&
                        <ListsAdd className="input-group">
                            <input value={this.state.addNew} onKeyDown={this.handleKeyDown} onChange={(e) => this.setState({addNew: e.target.value })} type="text" className="form-control" placeholder="New Sub-task"/>
                            <div className="input-group-append">
                                <button className="btn" type="button" onClick={this.handlePressButton}><i className="fas fa-plus-square"></i></button>
                            </div>                    
                        </ListsAdd>
                    }
                    
                    {this.renderSubList(this.props.subListItems)}
                </ListsUl> 
            </React.Fragment> 
        );
    }
 }

export default ListsItems;