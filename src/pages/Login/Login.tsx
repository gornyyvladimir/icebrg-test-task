import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '../../components/Form/Form';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import './styles.css';

const FormSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8),
});

interface Props {}
const Login = (props: Props) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div className="login">
      <Card className="login__card">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};
export default Login;
