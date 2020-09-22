import React, { useState } from 'react';
import Cart from './Cart';

const BELOW1L = 'below lack';
const BELOW50 = 'utility';
const ABOUELACK = 'aboue lack';
export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
      category: BELOW50,
      name: 'One Plus 7 PRo',
      cost: 45000,
      img:
        'data:image/jpeg;base64,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',
    },
    {
      category: BELOW1L,
      name: 'Apple i phone 11',
      cost: 60000,
      img:
        'data:image/jpeg;base64,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',
    },
    {
      category: BELOW1L,
      name: 'Apple i phone xs',
      cost: 95000,
      img:
        'data:image/jpeg;base64,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',
    },
    {
      category: BELOW1L,
      name: 'Apple i phone 11 pro',
      cost: 95000,
      img:
        'data:image/jpeg;base64,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',
    },
    {
      category: BELOW1L,
      name: 'Samsung Galaxy Note 10',
      cost: 99000,
      img:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEA8ODQ8NDQ0PDw0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUTITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFysdFR0rKy0rLSstLS0tKy0tKy0tLTcvLS0tLS0rKy03KzcrKystNy0rLSsrKysrKysrKysrK//AABEIAQMAwgMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAgEDBgQHBQj/xABOEAACAQICAgcUCAMHBQAAAAAAAQIDBBESBQYhIjEycnSxBxMUFkFRUlRhcYGRk7KztMHR0vAjJDNVc4SUoRUlNEJEYoKDosJTY5KjpP/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMFBAb/xAAoEQEAAgIBAQgCAwEAAAAAAAAAAQIREgMEBSEiMTJRUpETQRQkQiP/2gAMAwEAAhEDEQA/APcAAAAhkgB8PWq8q0oUYW7hGtcVlQhOpB1KcFlc5TlFPZwjCW71Wiixt7qrSg3e1MzWzUhRpQz93K08C3WVbey/Hq/vb1FytHXoV/QU+Ci0V7sqzPfhxS0XddTSNdf6Vu/+BV/DLz7xr+Rt/hPt1qsYrNJqMevLYS8J86307bVJOEK9Kc1/ZhUjJ/sTCJc38MvPvGv5G3+Ej+H3n3jX8jb/AAn2syK2ycZIfIdjd/eNfyNv8JHQV394XHkrf4D6zK2xql8zoO6+8LnyVt8Art7lf3+58lb/AAH0myuTJxCHz5QucMOjrh4bOPOrdS83AXLc9vXPk7b4DtkVSLYqrmzklK57duvJ23wCurcr++3T/wAlt8B0SK5E61RNrYLC6uE19ZuZYbqlG3Sf+0NFX930XThVq069tXdWKjzpUqtvKMc0Xit8to/GLiPo6P1i1f8Ajr+ZMpyREeSeOZlr4kkIkyagAAAAAAAAAAAAD4usUoqVrmTcnXnkkv7LVGbf7Jl2iFhQp9Tao5dZ9/ZcYqL/AOeqdOjH9DT7sTSvpVnzeSc2DTVVXCt1OUaWRSai2syeOCfiZ5xWUqM6cqbytxU6c4SaeXr4r2my5r8sb/B/9ClyzMO62xlwWGxj3cOp3iJS/QHMx0tUubGEqzzS2cr6uVNrZ8MX+3WNRKvHHLmWPzsGB5jM/qXe2F/5zZuJUFmb6jeZr/F1yMzjuML2ytsmTKpMuYTJlbYNlcmASZXIiTFkwYhEiqTJchGy2YVxBJP28jLtHfb2ncnXf+2aOeT9vIzo0d9ta8KvySKcvfC3HGMtdEkhEmaQAAAAAAAAAAAAJHwNZt/Y8Zl6CovadOjfsaXBXIcutG/seNS9Xq+4usJfRU+CuQ1r5InzeH81+X8w/wBClyzMDKfv6+wbjmvv+YLi9Lzpe8xl1UpOFNQjU56lhUlUnHBrqYJFJS9p5i0vqb778+Z6DKR5xzF5fU5d9+fM9BciYDuRVJkORW5EhmyuTFchZSIynCZCSZEmJJjZfUSZWS5CYkbK6ob9vIzr0Ysa9t3OfyfewkuVo4n7+Rl9jJ9EWq6mWu//AHUxnKYhs0SQiSqgAAAAAAAAAAAAAz2tO/seNT9WqjWL+ip8GPKLrZvrLjM/V6pFq/o4cFchtX0onzeF816X8xf4FL2mHNrzXotaRxe5K3p4eMy1zo+caVOu8ihUxUUqkZTclvtp1FuGcpev8xl/UpPryeHgnM38pHn3Mdf1D/PW883eYtUM5FcpENismVogNitkYkSkUlbAYkmEpCuRVYNi4iykK5EZThOPt5GX2H9Ta8C49NTORv28jOnR39Ta/h3PpqRapMNuSQiSsMAAASAAAAAAAAAAM9rXvrHjUvV6pVQltIcFFutm+seNS9XqnLRe0hwUbU9CP2zGvWqEdJRhKMlTq08cs8uL2eoYaz5lVxzxKtXXOk8ZZFlb8Z7DiLiNEvn6E0XTs6CoUd6tlvrs7WwbFbIxhaIDIIbEbErRBpsrxBsVspK+BKQrkEmVYkYMGlIXESTIciuEpcvnwM69Gv6za/h3XpqRwZvnwn0tCLG6tcdznF54+e0i9fMt5NqiSESVecAAAAAAAAAAAAAZ7WvfWPGn6Co/YcVF7SHBR26276x41L1eqfOpS2keCj0cceBH7WYiMVyFlInC0JbFbFkxHIiYWgzkQ2I389cTMVmFoO5Ctip7OHdSK8253cOTEjC8HlIrchZS+eqJKRXAdsSTFziSkNVsHcvnwn19A/1Nr+BeelpHwXP2cp9nQsnz+0weH0dz4ue0iYrhS89zdRJBAZsAAAAAAAAAAAAABntbN9Y8al6CovafIpT2se8j6+tm+seNy9XqnxIPax7yPTxelX9rJSEbElMTOXmGiyUjkv23HCObHGO93Xs8hbOZXnIxlMOJKeanLCcVBRi44vB5t3qldvCqpRzZ8IybeL3U8djkO5yX7YCymVmkrQ46WdLZU9icG5YtPDHF7BTUVTLDDNjzuKey93Ni+r1juz935wwFchqvCim5KpLHHBt4bL3uOwjozlUpiSkToLZTKnMRyEcidVljl8+E+/oL7azf/bufS0jMufz4TT6upOrZ44rGFyk1180ZckWLVxCnK3YAgPHDAAAEgAAAAAAAAADPa276x41L1eqZ1S2F3jQ62b6x41L1eqZfNsI9fBGao/0tlIXMVSqFbkbarrpVCuUyvMJKoNUwslITOVOoJnI1WhbzwSdQqlIRyGqVsplecTMVuROqyxzFcityEci2quyyUvnwmt1c+0sO/c+ZIxub58JsNWXt7Dv3Pmsz5oxCl7ZhvSSESc+FAAASAAAAAAAAAAM9rZvrHjUvV6pkHI1+tu+seNS9XqmKnI9vTRmiv+jSkJKRW5Fcqh6dV4WyqFbmVuQrmNDK1yK5TK3IrbJipstchMwjkI5E6myyUhcxW5C4k6myxyFchMxGYtqrsZy+fCjZ6rb/AEf+b81mJcvnwm21V3+j/wA55ph1EeFE2y38SSEScqFoAABIAAAAAAAAAAzut2+seNS9WqmErT2Td63b6x43L1eqefXEtszo9HGaM7T4kymVuQjmLmPXqjJnMVyK2xcRiTZY5CuQjZDYxKNzOQjkQ5CuRKNz4i4i4kYjEGxsSHIXMRiX1U3M38+E3Wqa22j33brzH7jBv58ZvdUt3R/fuvRyPN1cYoml8y3sSSESceHpgAAEgAAAAAAAAADOa4PbWHG5er1Tzq5ltpd9nomuO+sONv1eqebXUttLvs6XRelhyTixHIjMV5gzHtwzmxnIVyEchcxOFJudzFzCZiGxqrudyIEDEnCuxiMSMQJwr+ROIYkAThn+RKfz4Tf6p7uj+/c+ZIwC9ntRv9U93R/fufMkeTrPS36a+bTDfIAA47ogAAAAAAAAAAAADNa5b6w41L0FQ8yu3t5d98p6drjvrHjUvQVDy67lt5cKXKdPofS8fUTiyrMGYXEU92Hmm5mKQ5EExCk3MAoE4VnkiDEMghjDK3IkBQJwxnlwYlCYgpE4YzzrV8+M32qm7YfmeQ8+x+fCj0DVTfaP/OciPH1seDL29n8m3JL0ACEScZ3gAAAAAAAAAAAABm9cN9Y8al6CoeV3j28uFLlPU9cd2x41L0FQ8pvHt5cKXKdPoPS5/WTjCtMjEhMg6GHPnlg2JDYuJEpExDG3NBsSMRHIjEtEMLcx3IjMQicCzzzzSMxJMYjqAZzyTJMB4xHUR4wIYzZWoG+1UWzo/wDNchiFE3Oqm7o/82eHrJ/5w6vZFs80t6iQQHGfVAAAAAAAAAAAAADN64btlxmXoKh5Pevby4UuU9Y1v3bLjMvQ1DyS/wDtJcKXKzqdB5OT2nbEVV5hMwpOB0sOFblGIEqIyQZTciQ0UWKIyiTlnNiRiNGI6gOojLObEUB1EsURoxK7KbEUB4xLFEeMCNmc2KoGy1X32j13bsyij7DW6tb6w792eLrJ8GHX7Etnnlu0BCJOQ+wAAAAAAAAAAAAAGb1w3bLjMvQVDyS++0lwpcrPXNcN2y4zL0FQ8lu1t5cKXKzqdB6XE7YnEVcyiPgMoj5ToPnZsTKMojqI2UKzYqiMojqIyiRszmyIxGUSyMR1EruztYkYDxgWRiNGJXZnsRRHUR4wGUSk27mc2RGPsNTq5v8AR/5z2GbivYabV77Sw/O+w8vUWzV2uwZ/sS3AABzX2oAAAAAAAAAAAAAzeuG7ZcZl6CoeVXMdvLhS5Wem80KvzmlbV3goUrn6RvYwUqc4p+Nrxnm1yts5ZllltoyexmT6p7+jvWsd8uN2vx3vFdYyoURoxBVI9lHxonnsOyj40e789Pd89PTc0edZTGI6iLGvDso+NDxuIdkvGhPPT3ZTwcvxn6OolkYFLuodWS/YaN5T7JGc89Pdnbh5fjP0vUCyMChXlPskPG8p9kiv56MZ4eX4z9L1AlRKejqXZIOjqXZIr+aiv8fl+M/TpURoo5uj6XZIFpCl2aKzzVV/j8vxn6daRoNX5fS2C42ZWOkKT3JpvdwR9zVi9jO8tKMW26cK0pJLe4wlvustlHm5OTMO12Jw8leeZtEw9JQEIk8r7MAAAAAAAAAAAAAc19TjKLUoxknHBxlFSi1it1M4Z6v2c9/a28sEsMaUXhsdTrEgES5aep2jdh9BW+PdhivEdPSvYPdsrR9+3p+4ABEQjpYsO0rP9PT9xPSto/tGz/T0/cAAmsew6VtH9o2f6en7g6V9H9pWf6en7gAhGsew6V9H9pWn6en7g6V9H9pWnkKfuACUaV9kdK9h2laeQp+4jpXsO0rTyFP3ABKulfZPSvo/tK08hT9wq1asXsuztW9zZoU9zxAARNK+yVq1YprCztVsN7FCCeKww6h02dlSpylKnSp05SSzShCMZSw3MWtlgBC9YiP074kgAXAAAAAAB//Z',
    },
    {
      category: ABOUELACK,
      name: 'Apple iPhone 11pro Max',
      cost: 105000,
      img: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-pro-10.jpg',
    },
  ]);
  const addToCart = (product) => {
    // console.log(cart);
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);

    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };
  const [category, setCategory] = useState(BELOW1L);
  const getProductsInCategory = () => {
    return products.filter((product) => product.category === category);
  };
  return (
    <>
      <h1>products</h1>
      Select a category:
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={BELOW1L}>Below-1L</option>
        <option value={BELOW50}>Below-50K</option>
        <option value={ABOUELACK}>{ABOUELACK}</option>
      </select>
      <div className='products'>
        {getProductsInCategory().map((product, idx) => (
          <div className='product' key={idx}>
            <h3>{product.name}</h3>
            <h4>INR{product.cost}</h4>
            <img src={product.img} alt={product.name}></img>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    </>
  );
}