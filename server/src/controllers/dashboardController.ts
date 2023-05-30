import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../model/usermodel';

interface AuthenticatedRequest extends Request {
  user?: { email: string };
}

export const dashboard = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const email = req.user?.email;
    if (!email) {
      return res.status(401).json({ status: 'error', error: 'User email is missing' });
    }
    
    const user = await User.findOne({ email });
    console.log(user);
    
    if (user) {
   
     
     res.json({ message: 'User found', user, status: 'ok' });
    } else {
      res.status(404).json({ status: 'error', error: 'User not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 'error', error: 'Internal server error' });
  }
};

export const updateUserProfile = async (req:AuthenticatedRequest,res:Response) =>{
    
  try {
    const { name, profession } = req.body;
    const email = req.user?.email;

    if (!email) {
      return res.status(401).json({ status: 'error', error: 'User email is missing' });
    }

    const updatedUser = await User.findOneAndUpdate(
      { email },
      
      {$set:{name:name,profession:profession || 'abc'}},
      { new: true, upsert: true}
    );
console.log(updatedUser);
    if (updatedUser) {
      return res.json({ status: 'ok', message: 'Profile updated successfully',updatedUser });
    } else {
      return res.status(404).json({ status: 'error', error: 'User not found' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 'error', error: 'Internal server error' });
  }
  
  
  
  // try {
    //     const email = req.user?.email;
    //     if (!email) {
    //       return res.status(401).json({ status: 'error', error: 'User email is missing' });
    //     }
        
    //     const user = await User.updateOne({ email },{$set:{name:req.body.name}});
       
    //     return  res.json({ message: 'Authenticated email found', status: 'ok' });
        
    //   } catch (error) {
    //     console.log(error);
    //     res.status(500).json({ status: 'error', error: 'Internal server error' });
    //   }
}