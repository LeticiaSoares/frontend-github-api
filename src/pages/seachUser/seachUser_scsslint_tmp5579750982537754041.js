import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import Title from "../../components/title/title";
import Container from "../../components/container";
import Label from "../../components/label";
import Button from "../../components/button";
import Input from "../../components/input/input";
import Table from "../../components/table";
import Loading from '../../components/loading'

class SearchUser extends Component{
    constructor(props) {
        super(props)
        this.state = { user : '', isLoading : false,disabled : true}
        this.inputUser = React.createRef()
    }
    onGetRepos = () =>{
        this.props.onGetRepos(this.state.user)
    }
    setUser = (e) => {
        console.log('inputUser',)
        this.setState({user :  e.target.value, disabled : !!this.inputUser.current.hasError()})
    }
    static getDerivedStateFromProps (props, state) {
        if (props.isLoading !== state.isLoading) {
            return {
                isLoading: props.isLoading
            }
        } else {
            return null
        }
    }
    render() {
        const { repos } = this.props
        return (
            <Container>
                <Title>Github</Title>
                <Label> Digite o usuário </Label>
                <Input ref={this.inputUser}  type='text' onKeyPress={this.onGetRepos} onChange={this.setUser} onKeyDown  value={this.state.user} required />
                <Button disabled={this.state.disabled} onClick={this.onGetRepos}>Pesquisar</Button>
                {this.state.isLoading ? <Loading  width={'50px'}  /> :
                    repos &&
                        <React.Fragment>
                            <p>Total {repos && repos.length} </p>
                            <Table columns={['Repositórios','']}>
                                {repos && repos.map((item)=>(
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td><Link to={`/${this.state.user}/${item.name}/commits`}>Commits</Link></td>
                                    </tr>
                                ))}
                            </Table>
                        </React.Fragment>
                 }
            </Container>
        )
    }
}

export default SearchUser