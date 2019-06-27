import React,{Component} from 'react'
import Title from "../../components/title/title";
import Container from "../../components/container";
import Label from "../../components/label";
import Button from "../../components/button";
import Input from "../../components/input/input";
import Table from "../../components/table";

class SearchUser extends Component{
    constructor(props) {
        super(props)
        this.state = { user : 'LeticiaSoares'}
    }
    onGetRepos = () =>{
        this.props.onGetRepos(this.state.user)
    }
    setUser = (e) => {
        this.setState({user :  e.target.value})
    }
    render() {
        const { repos } = this.props
        return (
            <Container>
                <Title>Github</Title>
                <Label> Digite o usuário </Label>
                <Input  type='text' onChange={this.setUser}  value={this.state.user} required />
                <Button onClick={this.onGetRepos}>Pesquisar</Button>
                 <p>Total {repos && repos.length} </p>
                    <Table columns={['Repositórios']}>
                            {repos && repos.map((item)=>(
                                <tr>
                                    <td>{item.name}</td>
                                    <td><a href={`/${this.state.user}/${item.name}/commits`}>Ver commits</a></td>
                                </tr>
                            ))}
                    </Table>
            </Container>
        )
    }
}

export default SearchUser