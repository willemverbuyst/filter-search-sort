import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Book } from "../../interfaces/Book";

export function BookRenderer(props: Book): JSX.Element {
  const { _id, author, createdAt, pages, inPrint, title } = props;

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>author: {author}</p>
        <p>pages: {pages} </p>
        <p>
          createdAt: {createdAt.toLocaleDateString()}
        </p>
        <p>in print: {inPrint.toString()}</p>
      </CardContent>
      <CardFooter>id: {_id}</CardFooter>
    </Card>
  );
}
