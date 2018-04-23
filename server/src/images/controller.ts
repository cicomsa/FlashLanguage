import { JsonController, Get, Param } from 'routing-controllers'
import { Image } from '../images/entity'
  
  @JsonController()
  export default class ImageController {
  

    @Get('/images/:id([0-9]+)')
    getImage(
      @Param('id') id: number
    ) {
      return Image.findOneById(id)
    }
  
  }
  
  