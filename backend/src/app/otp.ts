  import { type Hono } from "hono"
  export const resOpt=(app:Hono)=>{
    app.post("/upload/reqOtp", async (c) => {
      const rantimePas = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
     return c.json(rantimePas);
    })
  }
