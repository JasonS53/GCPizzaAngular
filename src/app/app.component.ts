import { Component } from '@angular/core';
import { MenuItem } from 'src/app/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PizzaItems';


items: MenuItem[] = [
  {
    category: "Wings",
    name: "Bland Wings",
    price: 6.99,
    description: "For those who find mayonaise too spicy." ,
  },
  {
    category: "Wings",
    name: "Buffalo Wings",
    price: 7.99,
    description: "Tastes like that city on the other side of Erie." ,
  },
  {
    category: "Wings",
    name: "Hot Wings",
    price: 8.99,
    description: "Now you're talking!" ,
  },
  {
    category: "Wings",
    name: "Blazing Wings",
    price: 9.99,
    description: "Eat at your own risk.  Must sign a waiver." ,
  },
  {
    category: "Pizza",
    name: "Cheese Pizza",
    price: 8.49,
    description: "Boring, but expected.  Perfect for picky kids." ,
  },
  {
    category: "Pizza",
    name: "Pepperoni Pizza",
    price: 9.49,
    description: "Classic Detroit-Style with greasy cupped pepperoni." ,
  },
  {
    category: "Pizza",
    name: "Garden Pizza",
    price: 10.49,
    description: "Veggies only.  We won't judge. (Yes, we will)." ,
  },
  {
    category: "Pizza",
    name: "Chicago Style",
    price: 1000000.00,
    description: "Pay us and we'll make you this abomination." ,
  },
  {
    category: "Beverages",
    name: "Soda",
    price: 1.79,
    description: "Generic fizzy liquid." ,
  },
  {
    category: "Beverages",
    name: "Soda Pitcher",
    price: 4.79,
    description: "As above, just lots more of it." ,
  },
  {
    category: "Beverages",
    name: "Beer",
    price: 3.79,
    description: "Generic yellow beer, get an IPA from a brewpub." ,
  },
  {
    category: "Beverages",
    name: "Beer Pitcher",
    price: 9.79,
    description: "The more beer you drink, the better our food tastes." ,
  },
]
}


