
import { QueryClient, useMutation, useQueryClient } from "react-query"
import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import axios from "axios"

export function LoginCard() {

  const queryClient = useQueryClient();

const {mutate} = useMutation({ 
  mutationKey: ["login"],
  mutationFn: () =>{
    return axios.post("http://localhost:8080/login",{username:"tej",password:"password12"})
  },
    onError: () => {return <>Login Error.. </>},
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["login"]})
    }
    
  });
  
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to login.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Username" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="password" type="password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button onClick={()=> mutate()}>Login</Button>
      </CardFooter>
    </Card>
  )
}
