import React from 'react'
import Input from '../../components/input'
import Label from '../../components/label'
import Title from '../../components/title'
import Table from '../../components/table'
import Container from '../../components/container'

class ListCommits extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filterCommits : ''
        }
    }
    onFilterCommits = (e) =>{
        const value = e.target.value
        const commitsFilters  = this.props.commits.filter((item)=>(
              item.commit.message.toLowerCase().indexOf(value) !== -1
         ))
        this.setState({ filterCommits : commitsFilters})
    }
    render(){
        const commits = this.state.filterCommits.length > 0
            ?  this.state.filterCommits
            : this.props.commits
        const { className } = this.props
        return (
            <Container className={className}>
                <Title>Repositório: {this.props.match.params.repo}</Title>
                <Label>Digite o nome do commit</Label>
                <Input  type='text ' onChange={this.onFilterCommits} value={this.state.filter} required />
                <Table columns={['Autor','Data','Mensagem']}>
                    {commits && commits.map((item) => (
                                <tr key={item.commit.}>
                                    <td>{item.commit.author.name}</td>
                                    <td>{item.commit.author.date}</td>
                                    <td>{item.commit.message}</td>
                                </tr>
                            )
                    )}
                </Table>
            </Container>
        )
    }
}

export default ListCommits