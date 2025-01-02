import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Moment from "react-moment";
import { Book } from "../../interfaces/Book";

export function BookRenderer(props: Book): JSX.Element {
  const { _id, author, createdAt, pages, inPrint, title } = props;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>author: {author}</p>
        <p>pages: {pages} </p>
        <p>
          createdAt: <Moment date={createdAt} format="YYYY/MM/DD" />
        </p>
      </CardContent>
      <CardFooter>id: {_id}</CardFooter>
    </Card>
  );
}
