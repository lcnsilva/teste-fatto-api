import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class TarefaController {

    static getTarefas = async (req, res) => {
        try {
            const tarefas = await prisma.tarefa.findMany({
                orderBy: {
                    ordemApresentacao: 'asc'
                }})
            res.json(tarefas);
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: "Internal error"});
        }
    }

    static getTarefaById = async (req, res) => {
        try {
            const { id } = req.params;
            const tarefas = await prisma.tarefa.findUnique({
                where: {id: parseInt(id)}
            });
            res.json(tarefas);
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: "Internal error"});
        }
    }

    static createTarefa = async (req, res) => {
        try {
            const { nome, custo, dataLimite } = req.body;
            const tarefa = await prisma.tarefa.findUnique({
                where: {nome: nome},
            })
            if(tarefa){
                return res.status(406).json({msg: "O nome da tarefa já existe."})
            }
            const lastTarefa = await prisma.tarefa.findMany({
                orderBy: {
                        ordemApresentacao: 'desc',
                },
                take: 1
            })
            let newValueOrdemApresentacao = 1;
            if(lastTarefa.length > 0){
                newValueOrdemApresentacao = lastTarefa[0].ordemApresentacao + 1;
            }                        
            const newTarefa = await prisma.tarefa.create({
                data: {
                    nome,
                    custo,
                    dataLimite,
                    ordemApresentacao : newValueOrdemApresentacao
                }
            })
            return res.status(201).json({msg: 'Tarefa criada com sucesso.'});
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: "Erro ao criar tarefa"});
        }
    }

    static updateTarefa = async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, custo, dataLimite } = req.body;
            const tarefa = await prisma.tarefa.findUnique({
                where: {nome: nome}
            })
            if(tarefa && tarefa.id !== parseInt(id)){
                return res.status(406).json({msg: "O nome da tarefa já existe."});
            }
            const updateTarefa = await prisma.tarefa.update({
                where: {id : parseInt(id)},
                data: {
                    nome,
                    custo,
                    dataLimite
                }
            })
            res.status(200).json(updateTarefa);
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: "Internal error"});
        }
    }

    static changeOrdemApresentacao = async ( req, res) => {
        try{
            const { id } = req.params;
            const { oldOrdemApresentacao, newOrdemApresentacao } = req.body
            const secondTarefa = await prisma.tarefa.findMany({
                where:{
                    ordemApresentacao: newOrdemApresentacao
                }
            })
            const updateOrdemApresentacao = await prisma.tarefa.update({
                where: {id : parseInt(id)},
                data: {
                    ordemApresentacao: newOrdemApresentacao
                }
            })
            const updateSecondTarefa = await prisma.tarefa.update({
                where: {
                    id: secondTarefa[0].id
                }, data:{
                    ordemApresentacao: oldOrdemApresentacao
                }
            })            
            res.status(200).json({msg: "Tarefa movida com sucesso."})
        }catch(error){
            console.log(error);
            res.status(500).json({msg: "Internal error"});
        }
    }

    static deleteTarefa = async (req, res) => {
        try {
            const { id } = req.params;
            const deleteTarefa = await prisma.tarefa.delete({
                where: {
                    id: parseInt(id)
                }
            })
            res.status(200).json({
                message: "Tarefa deletada com sucesso!",
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: "Internal error"});
        }
    }
}

export default TarefaController;