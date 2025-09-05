import React, { useState } from 'react';
import './App.css';

function App() {
    const [user, setUser] = useState(null);
    const [books, setBooks] = useState([
      { id: 1, title: 'Cien años de soledad', author: 'Gabriel García Márquez', price: 9.99, coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 2, title: '1984', author: 'George Orwell', price: 8.99, coverImage: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 3, title: 'El Principito', author: 'Antoine de Saint-Exupéry', price: 7.50, coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 4, title: 'Don Quijote', author: 'Miguel de Cervantes', price: 10.99, coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    ]);

    const handleLogin = (userData) => {
      setUser(userData);
    };

    /* if (!user) {
      return <Login onLogin={handleLogin} />;
    } */
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );


  /* return (
    <div className="App">
      <Header user={user} onLogout={() => setUser(null)} />
      <div className="main-content">
        <h1>Libros Populares</h1>
        <div className="books-grid">
          {books.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
); */
}

// Componente de Login
function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, name: email.split('@')[0] });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>BookFlix</h2>
        <p>Disfruta de la mejor colección de libros</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

// Componente de Header
function Header({ user, onLogout }) {
  return (
    <header className="app-header">
      <div className="logo">BookFlix</div>
      <div className="user-menu">
        <span>Hola, {user.name}</span>
        <button onClick={onLogout}>Cerrar sesión</button>
      </div>
    </header>
  );
}

// Componente de Tarjeta de Libro
function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.coverImage} alt={book.title} />
      <div className="book-info">
        <h3>{book.title}</h3>
        <p className="author">{book.author}</p>
        <p className="price">${book.price}</p>
        <button>Ver detalles</button>
      </div>
    </div>
  );
}


export default App;