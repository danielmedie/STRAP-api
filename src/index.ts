import express, { Request, Response } from 'express';
import exphbs from 'express-handlebars';
import fetch from 'node-fetch';

const app = express();

app.engine('hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main'
}));
const port = 8008;

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.render('layouts/main')
});

//-------------------------------------COMPUTERS----------------------------------------//

app.get('/computers', async (req: Request, res: Response) => {
  try {
    const response = await fetch('http://localhost:1337/computers');
    const computers = await response.json();
    res.render('computers-list', { computers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/computers/:id', async (req: Request, res: Response) => {
  try {
    const response = await fetch(`http://localhost:1337/api/computers/${req.params.id}`);
    const computer = await response.json();
    res.render('computer-details', { computer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/computers', async (req: Request, res: Response) => {
  try {
    const response = await fetch('http://localhost:1337/api/computers', {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const computer = await response.json();
    res.json(computer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.put('/computers/:id', async (req: Request, res: Response) => {
  try {
    const response = await fetch(`http://localhost:1337/api/computers/${req.params.id}`, {
      method: 'PUT',
      body: JSON.stringify(req.body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const computer = await response.json();
    res.json(computer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.delete('/computers/:id', async (req, res) => {
  try {
    const response = await fetch(`http://localhost:1337/api/computers/${req.params.id}`, {
      method: 'DELETE'
    });
    const computer = await response.json();
    res.json(computer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});

//-------------------------------------TELEVISIONS----------------------------------------//

app.get('/televisions', async (req: Request, res: Response) => {
    try {
      const response = await fetch('http://localhost:1337/televisions');
      const television = await response.json();
      res.render('television-list', { television });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  app.get('/televisions/:id', async (req: Request, res: Response) => {
    try {
      const response = await fetch(`http://localhost:1337/apitelevisions/${req.params.id}`);
      const television = await response.json();
      res.render('computer-details', { television });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  app.post('/televisions', async (req: Request, res: Response) => {
    try {
      const response = await fetch('http://localhost:1337/api/televisions', {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const television = await response.json();
      res.json(television);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  app.put('/televisions/:id', async (req: Request, res: Response) => {
    try {
      const response = await fetch(`http://localhost:1337/api/televisions/${req.params.id}`, {
        method: 'PUT',
        body: JSON.stringify(req.body),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const television = await response.json();
      res.json(television);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  app.delete('/televisions/:id', async (req, res) => {
    try {
      const response = await fetch(`http://localhost:1337/api/televisions/${req.params.id}`, {
        method: 'DELETE'
      });
      const television = await response.json();
      res.json(television);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });

  //-------------------------------------audio-devices----------------------------------------//

app.get('/audio-devices', async (req: Request, res: Response) => {
    try {
      const response = await fetch('http://localhost:1337/audio-devices');
      const audio_device = await response.json();
      res.render('audio-devices-list', { audio_device });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  app.get('/audio-devices/:id', async (req: Request, res: Response) => {
    try {
      const response = await fetch(`http://localhost:1337/api/audio-devices/${req.params.id}`);
      const audio_device = await response.json();
      res.render('computer-details', { audio_device });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  app.post('/audio-devices', async (req: Request, res: Response) => {
    try {
      const response = await fetch('http://localhost:1337/api/audio-devices', {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const audio_device = await response.json();
      res.json(audio_device);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  app.put('/audio-devices/:id', async (req: Request, res: Response) => {
    try {
      const response = await fetch(`http://localhost:1337/api/audio-devices/${req.params.id}`, {
        method: 'PUT',
        body: JSON.stringify(req.body),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const audio_device = await response.json();
      res.json(audio_device);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  app.delete('/audio-devices/:id', async (req, res) => {
    try {
      const response = await fetch(`http://localhost:1337/api/audio-devices/${req.params.id}`, {
        method: 'DELETE'
      });
      const audio_device = await response.json();
      res.json(audio_device);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });

  //-------------------------------------mobiles----------------------------------------//

app.get('/mobiles', async (req: Request, res: Response) => {
    try {
      const response = await fetch('http://localhost:1337/mobiles');
      const mobile = await response.json();
      res.render('mobiles-list', { mobile });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  app.get('/mobiles/:id', async (req: Request, res: Response) => {
    try {
      const response = await fetch(`http://localhost:1337/api/mobiles/${req.params.id}`);
      const mobile = await response.json();
      res.render('computer-details', { mobile });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  app.post('/mobiles', async (req: Request, res: Response) => {
    try {
      const response = await fetch('http://localhost:1337/api/mobiles', {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const mobile = await response.json();
      res.json(mobile);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  app.put('/mobiles/:id', async (req: Request, res: Response) => {
    try {
      const response = await fetch(`http://localhost:1337/api/mobiles/${req.params.id}`, {
        method: 'PUT',
        body: JSON.stringify(req.body),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const mobile = await response.json();
      res.json(mobile);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  app.delete('/mobiles/:id', async (req, res) => {
    try {
      const response = await fetch(`http://localhost:1337/api/mobiles/${req.params.id}`, {
        method: 'DELETE'
      });
      const mobile = await response.json();
      res.json(mobile);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred' });
    }
  });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
