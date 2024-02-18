import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainCard from './components/MainCard';
import SecondaryCard from './components/SecondaryCard';
import './App.css'


function App() {
  return (
    <div>
      <Header/>
        <main>
          <div className='News-container-1'>
            <MainCard title={'Ford F-150 2024 tem novo visual e pode vir ao Brasil em versão híbrida'}  imgUrl={'https://quatrorodas.abril.com.br/wp-content/uploads/2023/09/2024-Ford-F-150-Lariat_01.jpg?quality=70&strip=info&resize=1200,800'} description={'A nova F-150 foi apresentada ao público com festa em Detroit, Michigan, que sedia nesta semana a edição anual de seu tradicional salão. Entretanto, notar o que muda na versão que chega às ruas norte'} category={'Automobilismo'}/>
            <MainCard title={'Petrobras (PETR4): Qual o tamanho da bolada de dividendos que virá no 4T23? Ação pode fisgar mais ganhos na bolsa, segundo BBI'}  imgUrl={'https://media.moneytimes.com.br/uploads/2024/02/petrobras-petr4-dividendos.jpg'} description={'As ações da Petrobras (PETR4) andam bem em 2024, considerando que o momento atual da bolsa não é dos melhores. O papel da companhia acumula até agora uma valorização de 10%, apoiado pelo avanço do petróleo e perspectivas positivas para a companhia, em meio à manutenção de resultados robustos e pagamentos de bons dividendos.'} category={'Economia'}/>
            <MainCard title={'Jeff Bezos vende ações da Amazon (AMZO34) e economiza US$ 288 mi em impostos; entenda'}  imgUrl={'https://media.moneytimes.com.br/uploads/2024/02/jeff-bezos-vendas-acoes-amazon.jpg'} description={'Jeff Bezos, fundador da Amazon (AMZO34), realizou vendas bilionárias na última semana. Entre a quarta-feira (07) e quinta-feira (08) foram vendidos US$ 2 bilhões em ações. Já entre os dias 9 e 12 as vendas totalizaram US$ 4 bilhões.'} category={'Empresas'}/>
          </div>
          <div className='News-container-2'>
            <SecondaryCard title={'Imposto de Renda 2024: Veja data para a declaração e até quando empregadores devem enviar informe de rendimentos'} description={'Você piscou e a temporada de declarações do Imposto de Renda Pessoa Física 2024 já está começando a dar as caras. Em 2024, o período será o mesmo do ano anterior: entre 15 de março e 31 de maio.'}/>
            <hr/>
            <SecondaryCard title={'Santander, Bradesco, Itaú e Banco do Brasil: qual ação tem recomendação de compra após o 4T23?'} description={'As últimas semanas foram marcadas pelos resultados do 4º trimestre – e de todo o ano de 2023 – dos “bancões” brasileiros: Santander (SANB11), Itaú (ITUB4), Bradesco (BBDC4) e Banco do Brasil (BBAS3).'}/>
            <hr/>
            <SecondaryCard title={'SUVs: Saiba quais são os 3 fracassos de vendas no primeiro mês de 2024'} description={'As montadoras Peugeot, Volvo e Toyota ficaram na ponta inferior da lista de emplacamentos da Federação Nacional da Distribuição de Veículos Automotores (Fenabrave) e foram as que obtiveram menos vendas em janeiro.'}/>
            <hr/>
            <SecondaryCard title={'Mbappé comunica saída ao PSG e deixará o clube em junho, afirma imprensa europeia'} description={"Acabou a novela! Kylian Mbappé deixará o PSG ao final da atual temporada. Nesta quinta-feira (15), o atacante comunicou ao presidente do clube francês, Nasser Al Khelaifi, que vai encerrar sua passagem pela equipe em junho. A informação foi divulgada por vários veículos de imprensa, como 'The Athletic', 'RMC Sports' e o jornalista Fabrizio Romano."}/>  
          </div>
        </main>
      <Footer/>
    </div>
  );
}

export default App;