import { useEffect, useState } from 'react'

function Home() {
  //estado para armazenar os usuários
  const [usuarios, setUsuarios] = useState([])
  useEffect(() => {
    document.title = "Página Inicial"

    // funcão carregar usuários
    async function carregarUsuarios() {
      try {
        // fazer uma chamada da API 
        const resposta = await fetch('/usuarios')
        if (!resposta.ok) {
          console.debug("http erro:" + resposta.status)
        } else {
          let dados = await resposta.json()
          setUsuarios(dados)
        }

      } catch (error) {
        console.error('erro ao buscar usuário' + error)

      }

    }
    carregarUsuarios()
  })
  return (
    <div className='container'>
      <h1>Todos os usuários</h1>
      <table>
        <thead>
        <tr>
          <th>id usuário</th>
          <th>nome</th>
          <th>usuário</th>
          <th>senha</th>
          <th>tipo usuário</th>
        </tr>
        </thead>
        <tbody>
        {usuarios.map(usuario=>(
          <tr key={usuario.usuario_id}>
            <td>{usuario.usuario_id}</td>
            <td>{usuario.nome}</td>
            <td>{usuario.usuario}</td>
            <td>{usuario.senha}</td>
            <td>{usuario.usuario_tipo}</td>
          </tr>
        ))}
        </tbody>

          </table>
    </div>
  )
}

export default Home