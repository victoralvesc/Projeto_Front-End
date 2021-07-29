// Criar um programa que calcule a media
// das turmas de alunos e envia
// mensagem do calculo da media 

const alunosSerieA = [
	{
		nome: "Victor",
		nota: 10
	},
	{
		nome: "Valber",
		nota: 4.7
	},
	{
		nome: "Maria",
		nota: 8.6
	},
	
]

const alunosSerieB = [
	{
		nome: "Joãor",
		nota: 9.2
	},
	{
		nome: "Maria",
		nota: 0.7
	},
	{
		nome: "Alves",
		nota: 0.6
	},
	
]

function calculaMedia(alunos) {
	return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

}

const media1 = calculaMedia(alunosSerieA)
const media2 = calculaMedia(alunosSerieB)

function enviarMensagem(media, turma){
	if (media > 5 ) {
	  console.log(`A media da turma ${turma} foi de ${media}. Parabéns`)
	} else {
	  console.log(`A média da turma ${turma} é menor que 5`)
	}
}

	enviarMensagem(media1, 'turmaA')
	enviarMensagem(media2, 'turmaB')

	