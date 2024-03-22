
import { useState } from "react";

function App() {
  const [books, setBooks] = useState(undefined);

  function handleClick() {
    setBooks([
      {
        id: 1,
        title: "Introduction to Algorithms",
        authors: [
          "Thomas H. Cormen",
          "Charles E. Leiserson",
          "Ronald L. Rivest y Clifford Stein",
        ],
        editorial: "MIT Press",
        cover:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAMQMBIgACEQEDEQH/xAAbAAACAwADAAAAAAAAAAAAAAAABQEDBgIEB//EAC8QAAIBAwIFAwIGAwEAAAAAAAECAwAEEQUhBhIxQWETFJEigSMyUaGx0TOCwRX/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIEA//EACERAAICAgEEAwAAAAAAAAAAAAABAhESE0EDMTKBBBQh/9oADAMBAAIRAxEAPwD3Giis3CsVhxWcya0rXaFQJnMtpIRv9JyfTYYOB9Od9jtQNKxhoMerx2twuuXEE8ouJPReFOX8HP083bm7nH60xlJCZGftj/tHNsQoJPgVD4ZcMGH+uaAbsrVpOU5L/fl/uphdy31ByP1PLgfBoWJdwrjH6BV/qrI0CLgH9gKBHOiiigDp6pZRanZPbSyzxoWVi1vKY3BVgfzDftXbJGNyKyegziSXUL1GuInu5R69nMP8EyqEblON1IVTnfPXvimlzfiGCWRYnuHjUuIYmBdvABIGfvTxBunQ2VgM9TvttSjiPijSeGoYZtYnkhjmfkQrC75PXsNqS38z8YcLpJomp3mlvK3MkoBV1KsVZGAIPUEdeo71On2V9faLcaPxkLTUY9lWePb1V7EjYq4PceO9FPgpYryfrk0Vnd6dxHo4uLKcXFncoyrJGSpxuDjoVI+xFec6LwhxLwtxtbXkU0uo6TJIYpJPWJdY22BdT3BwcjPTtWj4C0mXhnR59Nll9SNbuRoGJ3MZxgnzWk915pYN9y92tyjH9TGFFL/deaKrFnDJGMnsyz2QhvLxYYVeOZDcyEyxlGG5znmDFSG61XpumrZ3dvdyXDzXMET24nfd5YSQyhz3Kkde/wB6paYMcn+aomunRwscRdeRiTnocbD+fkVr1Iy/Yl2s0iXCICEAUEkkAY3O5Ncvd+azJvZFZ+RDgY5SVJ22yf3O3XaiO+uWP1whRhPk45vjf4p4E7DTe781PvPNZkXtzlQYQcrksNsHDbY+w+aIb+4Zk9SH0wWII642G/zmjANhpveeaKRe680UaxbRP63mj1vNFFaaMOTJ9bzS6902C8uvcSTXCvgDCSYXbxiiik4qSplw6s4O4uin/wAW13/HutwB+cdvtVltpdvbXUdyk1yXjGAGk+k9eoA360UVOqC4Oj+V1mqchn61FFFXRwyZ/9k=",
      },
      {
        id: 2,
        title: "The Art of Computing Programming",
        authors: ["Donald Knuth"],
        editorial: "Addison-Wesley",
        cover:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAJwMBIgACEQEDEQH/xAAbAAACAwADAAAAAAAAAAAAAAAAAwECBAUGB//EAC8QAAIBAgQBCwQDAAAAAAAAAAECAwARBBIhMUEFFCIjUVJhcZGh0ROTsfAVgeH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAIf/aAAwDAQACEQMRAD8A9qzHun2pbYiNWyMwDDgSL1Z0zqysdCLG2lJOFjPF/uN81mLHFQi93Xogk9IaW3qUnjkYqjBmGpAIqnNk01bQWHTb5qOaRjZn+43zSFOLHun2oqrX7faigz49ZWliEOJWI7lS9rgMutvK4/sUlv5E4VAMThRiVcljfoEbAbX438wBsatym6piIr4OSfMLF43sVGZbacdbcdLE9tcQY+Sc4ROTMUPpMXaMAnNcHgT5bdo4GiuXdcaVRBi4dJOsOzFc17aDQ5bD17QRvrr8bcnxT3TkzF5iRKWNzre99W3vW7CcrR4ieKA4eeKSQEgSLYaC5/f9sG9tqKG2qKgMTI0drPlHHqy34pMeKFxncm9yR9BwbcK0SJG7AsdV2s5H4qwKgABhp41UIOLhAUkuA23Vt8VK4iN3yjPm8Y2Hvan5l7R61GZe8PWgo21FDMveHrRUVOKieaMosjRHvIdRSBhJwQRi5dGBINiDa+m23wPG5RVBzSX6ZTnU1zGUz5tQST0h46+1QcHKVYHFT3a1iHtl8qiig0IrJGqklyBbMx1NFFFB/9k=",
      },
      {
        id: 3,
        title: "Refactoring: Improving the Design of Existing Code",
        authors: ["Kent Beck", "Martin Fowler"],
        editorial: "Addison-Wesley",
        cover:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgALQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgADBAIHAf/EAC4QAAIBAwIEBQMEAwAAAAAAAAECAwAEEQUhEjFRYQYTIkFxFIGRQmKhwRUksf/EABoBAAICAwAAAAAAAAAAAAAAAAQGAAECAwX/xAAjEQACAAQGAwEAAAAAAAAAAAAAAQIEEXIFMjRxscEiJDMG/9oADAMBAAIRAxEAPwDy6GEyq5DxrwrnDtji7DvVpsnwpEtuc+yzKSPkVzaSxxcXmoGBxjMYb/pras8KDCRIWPWFRt+TUMjO2mzK6IJIGDMVDLICKqe0kQgM8O5xtMpx+DWoXeZMfTwAL+wVmvpBJKCI0Q4/SMVCjTpURi1SNSUbZt0cMDselMtwYWlJt0ZI/ZXbiI++KC6CsSzW5yiFgxLNGGLHfYHfH8bddqN3ChZmCjA6dO1AzOcb8B0z3fCE+KIhDKynhX3xyrmN+KRmPStllqTQW11AI1eO4wHBfhIAV127+s79uVbrfVYlYF9OtXXfKu2Qcqo6ftz9zRwo0YKYqqk9arueantRT/IcKBTBDIA3FmRgc7occuXpIPZzWifWYnlMh02x4ePJRgCOX5H971KkowdoMsiagixyOqkNkKxAO1MRpf01w+sqwGPSduLP6eee/P70wGgJnON+A6SK7pACxghMZEix54wAzS8JAx88q+TCKIOqRKzkbMJCQv8AODVOKmB0o8T6jt4Wkt4vCoZrW2mnW6JnmktxIY4yyj88yB0Bpw0y20+50JbufTLETYcP/rKMMrFeWO1edaXr8Vnog0+a2mkj84ykxOE3+cfFFdM8Y4tJbX6d286TKhnyck5Pbc/FbIWjFsbfFunafbaDcy21jaxSho8PHCqsPWoO4HSkI0T1HxnJrULWItI4Y5CCT5hLek56Y9qGGufOfRbDj+f0cVz4QAQ230kvmCX6niXyyCOAD3z75qmpUo0T0qHSPwndQw6HlVi3AQqyRRqV5EFtu/OpUqizRp8ivdoBGinfdc9O5oua+VKBmV5jfgL9SK7pH//Z",
      },
    ]);
  }

  return (
    <>
      <button onClick={handleClick}>Populate books variable</button>
      <button onClick={() => setBooks(undefined)}>Remove books variable</button>

      {books && (
        <div>
          {books.map((book) => (
            <div key={book.id} style={{ display: 'flex', alignItems: 'center', margin: '20px' }}>
              <img src={book.cover} alt={book.title} style={{ width: '100px', height: '150px', marginRight: '20px' }} />
              <div>
                <h2>{book.title}</h2>
                <p>{book.authors.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;