import Link from "next/link";
import Image from "next/image";
import PHONE from "../public/assets/phone.png";

function Navbar() {
  return (
    <div>
      <nav className="bg-black">
        <div className="flex">
          <div className="flex w-1/4">
            <Image
              src={PHONE}
              alt="Phone icon"
              className="w-10 h-10 my-2 ml-5"
            />
            <p className="text-white text-2xl py-3 -5">Download App via SMS</p>
          </div>

          <div className="w-2/4"></div>

          <div className="w-1/4">
            <ul className="flex text-white text-right py-3">
              <li className="text-red-500 mx-3 text-2xl">
                <Link href="">
                  <span>اردو</span>
                </Link>
              </li>
              <span>|</span>
              <li className=" mx-3">
                <Link href="">Sign Up</Link>
              </li>
              <span>|</span>
              <li className=" mx-3">
                <Link href="">Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <hr />
      <nav className="bg-black flex">
        <div className="w-1/7">
          <img
            className="w-40 mx-5 p-4 mr-40"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbQAAAB0CAMAAADadTd0AAAAw1BMVEUAAAD////nIy11dXXGxsaQkJCFhYXwJC9nZ2empqbn5+ftJC7x8fF+fn7i4uLqIy6Xl5etra3X19fJycm9vb34+PjQ0NBISEhCQkK3t7c8PDxtbW1hYWGgoKCioqKDg4M1NTVXV1cWFhZNTU0oKCgfHx9pEBSTFh0LCwtTU1MlBgeEFBp7ExgjIyM2NjYXFxezGyPVICpNDA/FHiZeDhIfBQZwERacGB6oGSHNHygwBwm+HSU5CQtJCw4SAwRBCg0qBgjaHPyzAAAVt0lEQVR4nO1diVrqOhBuKGUppbSlLZRFQZDliFdBFD1u5/2f6mayNd0QQcGF/7vXQ7c0yZ+ZTCaTVFG+BP7rq4Wu7eZ9x9QNw/Dw/7puOo5fzwd22SpUS/3/zg6dySMomqoV+DraEJ7uuyeFzvDQuf61aFZt39iUrTh03z5tHLoEvwsNzTW3pStCXV6bHrosvwFXqv0hfIUwbfXQhfrJGJ662frQ0B3fBZvD0jAsq2vbgVv3Hd3w3iZOt0uHLtxPxFk1nTDDD7rVzn9vPH3e7KjaSeCbawj0tfO9lOS3oGMn7UPPCbTSFmZgr1Ow6xnmptntfXjefyWGmp9QZnmrs+uYq6WW/TSx063LD8n2L0Y/LmJG3up/XPJX7bKT5M0pfNwbfh1UNyoK2Mz7jF5nYCVEGdXbn/Cin49qPUpY+VPNu3453st5dvMzX/jzMNEiSms/9vi5FteUuraH1/4MRCvPc6t7fHc1rijrx+Hb2zjXZHeHY7X2noNCTN688tG7vA5XMmOeeyhb4MqK9W/OPoX9WyHSj5ndw1oBTTs2hHMHB83P14SslOqnk0NnB6OUj9JmWF8hV18HEmNe8IV6/kJsOsE/Dt4YJINNP/lqQ6P/4moyOE6cyox9VR97OzrIR3r3V/smJcbcLz0NqcWtyd/qmzwVjBn2B3qAPwmNIEob8k8PnaV9YxJaHo7VO3RuNoQad5b4hd9jTg7FeMz72koxgUl80I1M660Z85+Axgkvt3nyHYerrbg1iYzgZ48DSoHHRewb+4U6LorDOekcOlefgjBmwLG+2mDs3WjnE7zBBO3PGgqUbBZH5ZR/SpNsJ+UNaxDfrn77FgmYdp2fRhhDJ0iPwTQcEtP3XU3LKQu+8OrWzwy+bnZTwoJCwYPwWd+v1/Ef38EwTVOPwzTxBXxT3g0Cu2tpp2qp3+wdiHEe5uSUPyUY5+ugnSFwuwIzXg/KVrWzH4Xbt+pgJhr1E/V3TPpO1OCDlxfECTTztqZ+kq+6VSUBoHr+RP2A9vHy8nJ7e/uHAP/Ah7un+Xnoa+7Gq+S2hpkvVz9qfDtplbRykPfrttV+N1sv/56Xo9nFeHV//fj48DCf53K1Wq1STEWlgq/lcrn5fP5w8/h4fX2/Wo0vLmaj5eL17+0HFWd7tNSuu265wMfAc3ZfW3fWmg62NJZuHyk7FUCNIbcB+L21CgPjtIbpvHnEVI6ByNe/hxHO4VTVLDvI14n9Qc0M2y5jO0MrVNV2qdMfNFq93vDyKlZtk7PLYa/VmHZKalWzTnASvqlnNALd1Q7lVLrLVTYhaXNIXBIasVQCi+OLu9Hi6Usr2DUYDkqFrl03EzYPHtMfxNIcVzaSrd1oDDmcPzxeYzm8W74eXptugatptes6EfKM4ACO95frSkw8NkAlgVoEm1BIGLxfXcyWz3/2X+zd0FRP5PVaZvlLjYSxCfnn31+Mp6fX19fnxWIJGI1Gd3ez2QXGeDxerVb3GNfYknl8vLnBxgyYM7lapA1k0ctuAi2Kleho8ffQJX4HBoVwsHG4QNGPB6b86RWoHgHJQDBh94bZqWmSXZs/4E5wtnz9Hl3gQMtzdZn/XjOU2+Plz9PzAii9AEKBTkwm5xLL3/UKi99XV5/DU74szP36wRufiD+vbPzIeKT0PX9d86XFYgKM7nFnIoGXpwUhcYzHgHdftO9T6VRf/VeLWzZuXxfPr3//3b4oX8y9RuPZ9W8cHLAXgH1LbNuv0vNVQU96vzU68534+7x4fn5+fTp8v3dZ9o60vQ//iNo8MFQ8gjN+yxDg52DqI2QeV4x8NzQxbe6hM3HEe9HENslRR347dAzkHzoPR7wbGkI/LHzxN2DiI/vQeTji3VCReegsHPFuTEzUO3Qejng3uujoRf5+6Bxt/2+IS+/XrRT/CdCPLuRvCOeoIb8h/OMw+xui/hs2ZPhxyB86A0dsgaNHa394WYxGy6cPSKiXEvOjpqAUnT+dVPG5RI9YUtX0MTukgF/Ux39TlgK38OmUFafn+B1TiHlXswymKc4XfT4V1YkyyLiEU+ykFEBCsxR/pNPLuLWnWuVAgt1NWUC7uJ9DYHuxWLuZyeeHVZp4dk76PMfSqeQawoyVcHo3vKVMzsTX6Hgo1as5IDHP5kSBXSBSpmHhcsqEEQSSYUUAO5FlFMenl7oZGUYDpZ51ibxVz0hX6SQ/zkCjEZMbkA7c1NVnenQUvHgoihUltUptHF45ZQ/0svJyLnIsISkbWQVFqBG9JYg9iOvBSb6V7v8GhWgmXg6YkuvJmFo4e4kVeNozFJgSA/9jZWc3ZZMXXgV6egsDpG0xwhAvX+YLIolfA2WwcIT+yVVyC36pmpGwXEiUrLdeWm1llpXAZoexmk4jrU8aok+FEhaIJIb0tIqs+GkNUfnbgbTBdqSt4Swunes2tBB3vswrwNMK1gndLWc3mMFaketIIM2BOspQkH1IyUzUQWIhIr7DqBai0OjXBQNxh6ehhKilkEYrgCvkaqLUCm8jRvw0rN0CbbQZadppIYkzQlq8KIDTNaQ1SHYCLf5Ml7aAE+lW0ly84HQ6lCvxvE93u+PtMIdJys1GF7Pnl5fbVW62vCnmcsWLsEpKaloFUEDfcdXNrgMOlF6cEuKP2iRH0DyiZkWCtBIRs3okaRQLCQOlDjmLqekpL8dmpGVsnZHPfjiTNFDnGUZ1GUXTk6lJ3slomGOleLO4of3YApM1m82AtSU5USVtGiQi9RMrVDTKW5NGqg+qdgLNi6YXNSvipNGm2Y4lERNPyO8wkRQRUYs/kpFRibRe+h3bkKaT0mWnF7audrI0AqA4yQZpq0qu8jgaXd+Q0/Mc/nO7WmLWauQEJW2AMjJKz+9AWps1h4D968VbeJS0NqEsOnzvJTIHZ3xSxGRuic7ZO2ko1ZalAG0TdsoBSlrQHKesm3oq5moPo6WyKsLZUZEK3HhUzFWu4RcljZvKcbj0fTuQBn1iWVGuEGuKWpyTCGnE6vHiNjKwE7GGbZLpKopZKGHahyAtMzx0GOnUzGwDVOmwLvkRK8fFDPTiCo6KZH3V3Xh1X8uR34w0qNSkjm8yG2AH0jpIDJxoBXux2pJIU4mYJQuvxhP3aH7ip3Whh/ZOWsZok2I6nQ7lO7O0I8cfLFFjIl3z4pOiFEEnrirF+f0Ck3mvCNKUkzQBN1kt7Kgey2Swx3R+XNQEaRMyOPXS3CNAkvSlJ94tBNHTAyTMzL2TBjW12U4DKGpLpmFcydWWZFB2V8y94K5MucsV5/jEGIsa9G+cNFIxsQpTuRW3A2lUwbqSgosxwEmjo/z0RliOKm9gF3wyjehpN7Sm9m49EgfLJtP6lyjLdgxxU6tdM/8HtiIfrufXRaInlRkmsPgqkZYyHPK4MbM9aWTsPgRBE0MKDUUMerDcPQy40cjYQWgYMUUmIqd6JF/STUCalgr4kgwnzUpehu/FAmmFlEv/rRtckyaH6t1qu9Pv9zuqWj2tqqVBwuTobUAaHlXP5jkyJnst1oqvDxVmitzewSWJNCLhkbZSpjaEsilpRrccRVCnng0iA6GT2WOCQiFtQ5O90sORE7BEuTUkrTOQB+42Wod1HhE728tUXUdaKeMhz9ciLiAg7a3vV+IubXT3WCze3K8e/15j42P+wK7MHmqVlUwadAnyWGMYHm9GWhbOLlFk7M59TRTy3kGZ+5hAL+bIT0zEW0VKIHa8LWxPWjmbNHWt73GavWunbJZvQNpfIG2pLG9g75qb2j/lcTQu5m7Gz5i0x1rtXiaNZLYcPgs9B2vdu5BmXhJBk2cJQNSEiwMc5xaGFy9eBJLNOZCYgiECc7BABycqdP+SpsB24lm8SQPRzUnDuLufV4ovynWRbnAyf0qSRsx+4WPqSJWwNWlGvkTzGektCygqN/S3GSteBCcho9AEuEiCUuqGp4UGBdJKqeg4IWlq8nK7RUnrpFy6fIM0QLOEOzPozUq4a+u0q8z3GNpXw7dJeyHqkf5ezUe5h4fKzV/l5fliXkyoR1ozwhqHVsPFYUNDZNiMgllnkO/oeBnSHoS/GVNkOsZL3+5TGjMgOTOeULyR03u3HtcAahVd8aNNrEewNqhreFacjys16sfCWM7wpYsoaUQJscqEQgnDYAeTnwlaryGh1ZVkShpcV7kWSoHP83kaabiQMzI/UUCyct37OG0duhHhCnVDJsDkJ6StisXHVaX2WKtQJ+QdmPzPMdKqYdVD9Ql7dSfSsiaC2aBQdmM1vagukVDiPIMWDaVxyJWDHpGcL0Va1MeF1vTcDDC4Hr0qF7libqQ8FSvKn1xxRC6sKtHBNYHJj4S/nGAX0loZnPHbow5j0rGZaQ5VUKmXyQ6SeY0b0f5w76RZQZAtP4ZsLaPIKDWKYWAHTWqJXGCTfw6Tnk/FuaL8qwBXy2UuV5PdWBTc7Ic6kIz0XUjLjLhg066xqRkaZ5DiEYJaLtOsyB15lR7DY9KAYe+kOWumZqDXCXkyMqcuqfEHZNzUcrUFm/BcFIGmi+IdFTRwiMRIIxnu0gYv1cEOpIHP2WknAps0cX98Po12bEkDi03IefGsUMlD0UrbO2kuyp5wiarHevaLSccM7fW5mKvd3NGQkAs68Zm7VmBCrfYIBzHSiNlPYxCkxHYgDQyIVsp5aBbEpEzMXLdIx5aMiIXSdqAtRv3aIGP/naJo97530gpZfbFCDRErcmeWfhRuuftKrnJ/R/qxB2o5jm/GC4gaIXs5xUgjBioJ8JKDv7cnrZmVxQ7vm1JiREjkix7/xlUfqMyjuN8ENDn5WIrsLdqMtIyvaG1liJCGljpcIeEGreidZprvBzb/4HUB4QaPy/Et7tKomrxYjTBnRTp8i5OmsIi8SLPZnrQsQQs1cFo0li31eSG4vyF2mm3EHGkam5FWzyfh9whpKVfydRpVkHLF5XGUnhNL06e5g6q5atCBa4HmV/fzroS848m9+S0J7LmbXTxcQ5TxxcXyGkJEmO8/QZqaUjNbk9bI1gV9JmqpcY80EzF7jHme4gazhpIUf2IIXcaVNcGMiKotiyv2dT42UeR/8OUCPLQmmzCP7q4h8pFzliSNWt1RQ2Br0kDg0wWNXlOzglVbbH4g/g4kD9Lk01GLbD1pYLJsHayacWVNisgjDgtNdNTVzE+cyNETjxDqSMJUcyxYdckvJUkbJKpga9LWCBqNd9OzSGMdWzQfJB4y+RZyOtrKdiItM+50PWmYFj/pMfZM/rVhTbKuOmU//l2S8EaO0VwOCyeWP0OSNGhpse5kA9KO+ASMrnNF+gmI+fjgO0kesTGeRrPZbPH2fUccccQRRxxxxBFHHHHEEXFAcKrshOmGLsKeTcbqlk3DAVo2jz5vBY5fpsFDHRreavfYpSs7nMzo2MSLOrC5Q8zjU9elvJO3Er76hq0qqi2ClRtlO7E2u2mHYblVktOpTd1jKssIv1rwnUBMeLRs6niZ2KFbtJ13wu9gDfCjJ8KD32dpKiU7jIRo0PSjk2+dsLbaLIqR1YjCXoh/SpHEZccJmANkaNOgqYFNE6b1WSIHby0aQJ5vSkFXTcnPMiCzSV3u6e1wD9sUIfwMjePhXiVe1QUp4kOj3ixVLDUwmSvLQoavo8R+FRZ+n8NdlPBFiOQcjC15ePLk5ymb8eE+LHbRQboTFqvNzhfCxwOch3C6rIpMnCPuMi3wB8uSw7SNPMMwPBGexZ7rYTp9oMg3eCngPnZwhd9iimneCUKOw+dhWszJzBfPq+yN8HDmTgwMxK9miLKUPUd4exvgGCwJJ6QgzY+6xjTIOIfjh/OGGq0UQdqEX8qIkszjGz2eNlnmm+DVy4ezcpS0angiCPNlsYWQ7FBFHhE1UxS0Q+akxaazKjgAbU5RgbsDu5LXvJ22aeYA6C2TpqD7vNSSp/0MWnybO1i7om0rIWkkaeF+PMmeR5dASOuKSEnDtUTRgbRhGI0jSDOjURWWtLB6gqq+eEBDGsxwCtJMfiUt+H9S6huoVEJGn5ZZnU6TpE1RwxDO23Wk0ZZe4GF9p6gMJ3pIFK6OaAmZFlEhFcFVBmlpMYLAh3ECT/OkNJkZQlqPx3/bMiMSaWpYhhPUS3lL4q15civLXBOpLdGigLRQBkPSutGpF5m0ApoUhH7UEGl+gjShWZyUlV5D4TbnEe6dJGk2gv8Y1pB2SWvwnKsiDV2BFNl6SQgyFXY+90AkzeQXN5c0oOoSNR2X0kffFZG0MuS6w0ukh3EFWaRt8t1CaPVToXXLON8ep6SBCnXUE3cK0qD/kOY5ZdIcA9cU148aGjZxftXEFsoTrObjNXBVDpBu+ah+wjuiFNK8Oj7LC7iGtD6rQd66ukgxMX+oUOItigm7zgpOJ295Shmk6Y7jxENgcKvEbRP/1+D9oIZMxzGZ2J2RdIW1okmRQlmkwdNvGiJkTkhoR0cqOyEtnOwJSVMaDjJEhUqkTaBh6VwLYtIU10shDWfTSM7XqbgUrqRbkqRNQUOJya13kIbb4inC3TNOk3VbrPJMQdqJWjC5LGWQ5riuG59+r+uKU8dqotVGPV7qOr6PNdwzVFer+ZC1c1cE+2aRBsEMb62pQs5pVUQrNlC9UAi48qbqURiDHXl+th1OakqkacguFHz+CJCGtUY7dbPysrzQRyHSjs0uWKfIBTVJWoA0raBzataQ1mKJ83YdYG5QJ1/HbLKyMjr5IEQlcuIxm+8d6hE3B6guo6vxl2vyFD3p03AHGuq8FreOskhL2QQugUjMGzY4PU98oQZI64WT0BHSpBqSSHPo8xbP/hAqIE3SMIzoVPYUlmRAQKiRTZoHyXu8hC6iLxGpS4YI7bKE2ebiQrg+pmLA6aD91zlnlVYbN4vfYYgUUBusi8C0eQ+TNERwDUmnVJb4zoYIBzW66izvxORvC/s8Slo9hbQJrQPefAlpim6kk+bF7X7cBIeyiZMgrU9bA8+xRpq+NP6QSKNqVlgWWInRjltYWRrbJIUJHpU0lJS0cHCdLmkd5EDjK+GuSOEpJyTNka1GzuBHSdqApqOyNjUgBbO5CSZI052uJn3DJiRNo4W1UY8d9kgqcdImKG9Zenz56BUeXFTlkK1SnLSADrYFTbiHx5ZLOHxwQ9Ku8DXNFCaRA83IVsFG5eKiIxcXghdeRfUgjxJ92glyg4CFgLSRH+CDWHjSJdvzILQwNJSH+85ZPszANXgNunpZC3i/kk5aGd4YvPXlO0eyVApmj56jPULLpGs6TFqEAY/UtE2sp0JvVdXkOsSmra1p0ppRTdJOy/FvJvZciB2N7xRTwsW2ZRU0dZyo+6FOy1IyWSMY5r3IvpSWpHAvMQWmEI2AR4OehedsuRAdbBiGXq22yQSwAKdN2lb7DjmIbwngOE1adJ5zld5HnTln8DvPLxUc3G/zrPRM4d7qmKJZF+jTsZf8D6whmPLbbtK7AAAAAElFTkSuQmCC
"
            alt=""
          />
        </div>
        <div className="w-1/7"></div>
        <div className="w-4/7 ">
          <ul className="text-white text-bold flex ">
            <li className="m-5">
              <Link href="">Home</Link>
            </li>

            <li className="m-5">
              <Link href="">New Cars</Link>
            </li>

            <li className="m-5">
              <Link href="">Bikes</Link>
            </li>

            <li className="m-5">
              <Link href="">Auto Store</Link>
            </li>

            <li className="m-5">
              <Link href="">Videos</Link>
            </li>

            <li className="m-5">
              <Link href="">Forms</Link>
            </li>

            <li className="m-5">
              <Link href="">Blog</Link>
            </li>

            <li className="m-5">
              <Link href="">More</Link>
            </li>

            <li className="m-5">
              <Link href="">Home</Link>
            </li>
          </ul>
        </div>
        <div className="w-1/7">
          <button className="bg-red-500 text-white m-3 px-3 py-2 rounded-md">
            {" "}
            Post an Ad
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
