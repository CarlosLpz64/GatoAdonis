import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Partida from "App/Models/Mongoose/Partida";

export default class PartidasController {
    public async index ({ response })
    {
        try{
            const partida = await Partida.find({})

            response.ok({message: "Consulta Correcta", data: partida})
        }
        catch(error)
        {
        response.internalServerError({message: "Ocurrió un error"})
        }
    }

    public async store({ response, request }: HttpContextContract) {
        try{
    
          const data = request.all()
    
          const data1 = await Partida.insertMany(data)
    
          //const id_sesion = await Partida.find({_id: })
    
          response.ok({message: "Inserción correcta", data: data1})
        }
        catch(error)
        {
          response.badRequest({message: "Ocurrió un error"})
        }
      }
    
      public async show({ response, params }: HttpContextContract) {
        try{
          const sesion = await Partida.find({_id: params.id})
    
          response.ok({message: "Todo correcto", data: sesion})
        }
        catch(error)
        {
          response.badRequest({message: "Ocurrio un error"})
        }
      }

      public async update({ response, request, params }: HttpContextContract) {
        try{
          await Partida.updateOne({_id: params.id}, 
            {host: request.input('host'),
            guest: request.input('guest'),
            gatito: request.input('gatito'),
            ganador: request.input('ganador'), 
            estado: request.input('estado'),
            turno: request.input('turno'),
          })
    
    
          response.ok({message: "Actualización correcta"})
        }
        catch(error)
        {
          response.badRequest({message: "Ocurrió un error"})
        }
      }

      public async ActGyE({ response, request, params }: HttpContextContract){
        try{
          await Partida.updateOne({_id: params.id}, 
            {ganador: request.input('ganador'), 
            estado: request.input('estado')
          })
    
          response.ok({message: "Actualizacion correcto"})
        }
        catch(error)
        {
          response.badRequest({message: "Ocurrio un error"})
        }
      }
    
      public async ActInvitado({ response, request, params }: HttpContextContract)
      {
        try{
          await Partida.updateOne({_id: params.id}, 
            {
              guest: request.input('guest')
            })
    
          response.ok({message: "Actualizacion correcto"})
        }
        catch(error)
        {
          response.badRequest({message: "Ocurrio un error"})
        }
      }

}
