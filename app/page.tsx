import Link from "next/link";

// Dados estáticos dos posts
const posts = [
  {
    id: 1,
    title: "Atividade 1: Cotação do Dólar por Período",
    content: `Esta atividade consistiu em desenvolver uma rotina em Python que recebe como parâmetro uma string no formato \"MMYYYY\" (mês e ano) e retorna um gráfico de linha com a cotação do dólar durante todo o período solicitado.

Como foi implementado:

• Desenvolvemos uma função que recebe \"MMYYYY\" e calcula automaticamente o primeiro e último dia do mês usando a biblioteca calendar e datetime
• Utilizamos a API do Banco Central (BCB) através do endpoint \"Cotação do Dólar por período\" para obter os dados históricos
• Implementamos lógica para tratar fins de semana e feriados, utilizando a cotação do último dia útil anterior quando não há dados disponíveis
• Criamos visualizações interativas usando a biblioteca Plotly para gerar gráficos de linha profissionais
• Desenvolvemos tratamento de erros para casos onde a API não retorna dados ou há problemas de conexão

Tecnologias utilizadas: Python, Plotly, Requests, Datetime, Calendar, API BCB Olinda

O resultado foi um sistema robusto capaz de gerar relatórios visuais detalhados sobre o comportamento do dólar em qualquer período mensal.`,
    thumbnail: "/images/1.png"
  },
  {
    id: 2,
    title: "Atividade 2: Monitoramento de Frota de Ônibus",
    content: `Esta atividade teve como objetivo desenvolver um sistema de monitoramento em tempo real de uma frota de ônibus, integrando dados de paradas fixas e posições atuais dos veículos em um mapa interativo.

Implementação realizada:

• Configuração de API: Criamos conta e obtivemos token de acesso para a API de transporte público
• Busca de paradas: Desenvolvemos rotina para consultar e extrair todas as paradas oficiais da linha de ônibus selecionada
• Mapa interativo: Utilizamos bibliotecas como Folium ou Plotly para construir a visualização do mapa
• Dados em tempo real: Implementamos consumo da API que fornece a posição atual de cada ônibus da linha
• Visualização diferenciada: 
  - Paradas fixas: marcadores azuis (pins) nos pontos de parada oficial
  - Ônibus em movimento: marcadores vermelhos mostrando a localização em tempo real
  - Legenda clara para diferenciar os tipos de marcadores

Funcionalidades implementadas:
- Seleção de diferentes linhas de ônibus
- Atualização automática das posições em intervalos regulares
- Tooltips informativos mostrando detalhes de cada parada e veículo
- Zoom e navegação pelo mapa
- Tratamento de erros para casos de veículos sem sinal GPS

Tecnologias utilizadas: Python, Folium/Plotly, Requests, Pandas, APIs de transporte público

O sistema permite monitorar eficientemente o deslocamento dos ônibus em relação às paradas estabelecidas.`,
    thumbnail: "/images/2.jpeg"
  },
  {
    id: 3,
    title: "Atividade 3: Regressão Linear",
    content: `Esta atividade envolveu a implementação de um modelo de regressão linear para analisar a relação entre anos de estudo (variável independente X) e salário (variável dependente y).

Metodologia implementada:

• Cálculo matricial: Utilizamos a fórmula matricial para calcular os coeficientes da regressão linear: β = (XᵀX)⁻¹Xᵀy
• Processamento de dados: Desenvolvemos rotina para carregar os dados dos arquivos X.txt e y.txt
• Visualização: Criamos gráficos com os pontos originais e a reta de regressão estimada usando Plotly/Plotnine

Implementação técnica:

- Carregamento e tratamento dos dados dos arquivos texto
- Aplicação da fórmula matricial para cálculo dos coeficientes a (intercept) e b (slope)
- Geração do gráfico com dispersão dos pontos e linha de regressão
- Cálculo de métricas de qualidade do modelo (R², erro quadrático médio)

Código principal:
\`\`\`python
# Cálculo dos coeficientes usando fórmula matricial
X_matrix = np.column_stack([np.ones(len(X)), X])  # Adiciona coluna de 1s para o intercept
coef = np.linalg.inv(X_matrix.T @ X_matrix) @ X_matrix.T @ y
a, b = coef  # intercept e slope

# Geração do gráfico
df = {"x": X, "y": y}
plot = (
  ggplot(pd.DataFrame(df), aes("x", "y"))
  + geom_point()
  + geom_abline(intercept=a, slope=b)
  + ggsave("grafico_regressao.png")
)
\`\`\`

Resultados obtidos:
- Modelo capaz de prever salários com base nos anos de estudo
- Visualização clara da relação linear entre as variáveis
- Cálculo preciso dos coeficientes usando álgebra linear

Tecnologias utilizadas: Python, NumPy, Pandas, Plotly/Plotnine, Matplotlib`,
    thumbnail: "/images/3.png"
  }
];

export default function Home() {
  return (
    <main
      style={{
        maxWidth: 800,
        margin: "40px auto",
        padding: "0 16px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <h1 style={{ color: "#0b63e6" }}>Blog – Atividades Python</h1>

      </div>

      {/* Lista Vertical */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
        }}
      >
        {posts.length === 0 && <p>Nenhum post ainda. Crie um novo!</p>}

        {posts.map((p) => (
          <article
            key={p.id}
            style={{
              background: "#fff",
              border: "1px solid #e6eefc",
              padding: 16,
              borderRadius: 8,
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            {p.thumbnail ? (
              <img
                src={p.thumbnail}
                alt={p.title}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: 600,
                  objectFit: "contain",
                  display: "block",
                  marginBottom: 12,
                  borderRadius: 8,
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: 250,
                  background: "#f1f7ff",
                  marginBottom: 12,
                  borderRadius: 8,
                }}
              />
            )}

            <h3
              style={{
                color: "#0b63e6",
                margin: "6px 0 10px",
                fontSize: 22,
                fontWeight: "bold",
              }}
            >
              {p.title}
            </h3>

            <p
              style={{
                color: "#333",
                whiteSpace: "pre-wrap",
                lineHeight: 1.5,
              }}
            >
              {p.content}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}