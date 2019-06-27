import React,{Component} from 'react'
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
        this.state = { user : 'LeticiaSoares', isLoading : false}
    }
    onGetRepos = () =>{
        this.props.onGetRepos(this.state.user)
    }
    setUser = (e) => {
        this.setState({user :  e.target.value})
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
        console.log('state',this.state)
        return (
            <Container>
                <Title>Github</Title>
                <Label> Digite o usuário </Label>
                <Input  type='text' onChange={this.setUser}  value={this.state.user} required />
                <Button onClick={this.onGetRepos}>Pesquisar</Button>
                {this.state.isLoading ? <Loading  width={'50px'}  /> :
                    repos &&
                        <React.Fragment>
                            <p>Total {repos && repos.length} </p>
                            <Table columns={['Repositórios','']}>
                                {repos && repos.map((item)=>(
                                    <tr>
                                        <td>{item.name}</td>
                                        <td><a href={`/${this.state.user}/${item.name}/commits`}>Commits</a></td>
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