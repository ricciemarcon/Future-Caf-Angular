import { Component, Input } from '@angular/core'

@Component({
  selector: 'image-slider',
  templateUrl: 'image-slider.component.html',
  styleUrls: ['image-slider.component.css'],
})
export class ImageSlider {
  @Input()
  imagesrc21: string =
    'https://images.unsplash.com/photo-1610218588433-227ebd3e8fea?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM2fHx3aW5lfGVufDB8fHx8MTcwMDc2NzE1Nnww&ixlib=rb-4.0.3&w=200'
  @Input()
  imagesrc2: string =
    'https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fFRlYXxlbnwwfHx8fDE3MDA3NjcxMTZ8MA&ixlib=rb-4.0.3&w=200'
  @Input()
  imagesrc1: string =
    'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fENvZmVlfGVufDB8fHx8MTcwMDc2NTc3Nnww&ixlib=rb-4.0.3&w=200'
  @Input()
  imagesrc: string =
    'https://images.unsplash.com/photo-1561047029-3000c68339ca?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fENvZmVlfGVufDB8fHx8MTcwMDc2NTc3Nnww&ixlib=rb-4.0.3&w=200'
  @Input()
  imagealt: string = 'image'
  @Input()
  imagealt1: string = 'image'
  @Input()
  imagealt21: string = 'image'
  @Input()
  rootClassName: string = ''
  @Input()
  imagealt2: string = 'image'
  slideNumber1: number = 1
  constructor() {}
}
