import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table"

export default function TableChamp() {
    return (
        <div className=" justify-center items-center mt-11 mr-48 w-[800px]">
            <div className=" p-5 w-full text-center rounded-t-lg">
                <h1>Tabela do Campeonato</h1>
            </div>
            <Table className=" rounded-b-lg">
                <TableHeader>
                    <TableRow>
                        <TableHead className="bg-blue-700"> </TableHead>
                        <TableHead>Classificação</TableHead>
                        <TableHead className="text-center">Pontos</TableHead>
                        <TableHead className="text-center">Jogos</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className=" rounded-lg">
                        <TableCell className="bg-blue-700 rounded-bl-lg text-center"> 1 </TableCell>
                        <TableCell className="font-medium">Nome</TableCell>
                        <TableCell className="text-center"> 0 </TableCell>
                        <TableCell className="text-center"> 0 </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
};