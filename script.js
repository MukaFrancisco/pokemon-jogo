// ... (mantenha todo o código anterior até a parte de mostrar botões)

// NOVA VERSÃO DO CONTEÚDO DAS TELAS:
// Conteúdo da tela superior
document.getElementById('topScreen').innerHTML = `
    <div class="pixel-content">
        <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
            <div style="text-align: center;">
                <div style="font-size: 24px; color: #FFD700; margin-bottom: 10px; text-shadow: 3px 3px 0 #000;">⚭</div>
                <div style="font-size: 10px; color: #FFF; margin-top: 10px;">PROF. CARVALHO</div>
            </div>
        </div>
    </div>
`;

// Conteúdo da tela inferior
document.getElementById('bottomScreen').innerHTML = `
    <div class="pixel-content">
        <div class="main-title">ESCOLHA SEU POKÉMON</div>
        <div style="display: flex; justify-content: space-around; width: 100%; margin: 20px 0;">
            <div style="text-align: center; cursor: pointer;" class="pokeball-option" data-pokemon="Charmander">
                <div style="width: 40px; height: 40px; margin: 0 auto 5px;">
                    <div style="width: 100%; height: 50%; background: #FF4444; border-radius: 20px 20px 0 0; border: 2px solid #000;"></div>
                    <div style="width: 100%; height: 50%; background: #FFF; border-radius: 0 0 20px 20px; border: 2px solid #000; border-top: none;"></div>
                    <div style="width: 16px; height: 16px; background: #FFF; border: 2px solid #000; border-radius: 50%; position: relative; top: -26px; left: 50%; transform: translateX(-50%);"></div>
                </div>
                <div style="font-size: 7px; color: #FFF;">CHARMANDER</div>
            </div>
            <div style="text-align: center; cursor: pointer;" class="pokeball-option" data-pokemon="Squirtle">
                <div style="width: 40px; height: 40px; margin: 0 auto 5px;">
                    <div style="width: 100%; height: 50%; background: #4444FF; border-radius: 20px 20px 0 0; border: 2px solid #000;"></div>
                    <div style="width: 100%; height: 50%; background: #FFF; border-radius: 0 0 20px 20px; border: 2px solid #000; border-top: none;"></div>
                    <div style="width: 16px; height: 16px; background: #FFF; border: 2px solid #000; border-radius: 50%; position: relative; top: -26px; left: 50%; transform: translateX(-50%);"></div>
                </div>
                <div style="font-size: 7px; color: #FFF;">SQUIRTLE</div>
            </div>
            <div style="text-align: center; cursor: pointer;" class="pokeball-option" data-pokemon="Bulbasaur">
                <div style="width: 40px; height: 40px; margin: 0 auto 5px;">
                    <div style="width: 100%; height: 50%; background: #44FF44; border-radius: 20px 20px 0 0; border: 2px solid #000;"></div>
                    <div style="width: 100%; height: 50%; background: #FFF; border-radius: 0 0 20px 20px; border: 2px solid #000; border-top: none;"></div>
                    <div style="width: 16px; height: 16px; background: #FFF; border: 2px solid #000; border-radius: 50%; position: relative; top: -26px; left: 50%; transform: translateX(-50%);"></div>
                </div>
                <div style="font-size: 7px; color: #FFF;">BULBASAUR</div>
            </div>
        </div>
        <div style="background: rgba(255, 255, 255, 0.9); border: 2px solid #000; border-radius: 5px; padding: 8px; margin-top: 10px;">
            <div style="font-size: 7px; color: #000; line-height: 1.4;">Professor: Bem-vindo! Escolha seu Pokémon inicial.</div>
            <div style="font-size: 6px; color: #666; text-align: right; margin-top: 5px;">▼ PRESS A</div>
        </div>
    </div>
`;

// ... (mantenha o resto do código dos botões e sons)

// ADICIONE ESTAS FUNÇÕES NO FINAL DO SCRIPT:

// Configurar Pokébolas
document.querySelectorAll('.pokeball-option').forEach(pokeball => {
    pokeball.addEventListener('click', function() {
        const pokemon = this.dataset.pokemon;
        
        // Efeito visual
        this.style.transform = 'scale(1.1)';
        this.style.filter = 'brightness(1.2)';
        
        // Som
        playClickSound();
        
        // Feedback
        document.getElementById('bottomScreen').innerHTML = `
            <div class="pixel-content">
                <div class="main-title">PARABÉNS!</div>
                <div style="font-size: 32px; color: #FFD700; margin: 15px 0;">⚭</div>
                <div style="font-size: 9px; color: #FFF; line-height: 1.5; text-align: center;">
                    Você escolheu<br>
                    <span style="color: #FFD700;">${pokemon}</span>!
                </div>
                <div style="font-size: 7px; color: #4FC3F7; margin-top: 20px;">
                    Pressione START para continuar
                </div>
            </div>
        `;
        
        setTimeout(() => {
            this.style.transform = '';
            this.style.filter = '';
        }, 300);
    });
});

// Configurar botão START para mostrar anel
document.querySelector('.start').addEventListener('click', function() {
    showRingProposal();
});

function showRingProposal() {
    // Tela superior - Anel
    document.getElementById('topScreen').innerHTML = `
        <div class="pixel-content">
            <div style="font-size: 32px; color: #FFD700; margin-bottom: 10px; animation: float 2s infinite;">💍</div>
            <div style="font-size: 10px; color: #FFF; text-align: center;">
                Para você...
            </div>
        </div>
    `;
    
    // Tela inferior - Pergunta
    document.getElementById('bottomScreen').innerHTML = `
        <div class="pixel-content">
            <div class="main-title">QUER NAMORAR COMIGO?</div>
            <div style="font-size: 9px; color: #FFF; line-height: 1.5; text-align: center; margin: 15px 0;">
                Esta jornada pode ser especial<br>
                se continuarmos juntos...
            </div>
            <div style="display: flex; gap: 20px; margin-top: 20px;">
                <div style="font-size: 8px; color: #00E676; cursor: pointer;" id="acceptBtn">✓ ACEITAR</div>
                <div style="font-size: 8px; color: #FF4444; cursor: pointer;" id="declineBtn">✗ RECUSAR</div>
            </div>
        </div>
    `;
    
    // Configurar botões de aceitar/recusar
    document.getElementById('acceptBtn').addEventListener('click', function() {
        showFinalScene(true);
    });
    
    document.getElementById('declineBtn').addEventListener('click', function() {
        showFinalScene(false);
    });
}

function showFinalScene(accepted) {
    if (accepted) {
        // Aceitou
        document.getElementById('topScreen').innerHTML = `
            <div class="pixel-content">
                <div style="font-size: 40px; color: #FF4081; margin-bottom: 10px;">❤️</div>
                <div style="font-size: 12px; color: #FFD700;">ACEITO!</div>
            </div>
        `;
        
        document.getElementById('bottomScreen').innerHTML = `
            <div class="pixel-content">
                <div style="font-size: 10px; color: #00E676; margin-bottom: 10px;">PARABÉNS!</div>
                <div style="font-size: 8px; color: #FFF; line-height: 1.5; text-align: center;">
                    Começamos uma nova<br>
                    aventura juntos! ❤
                </div>
            </div>
        `;
    } else {
        // Recusou
        document.getElementById('topScreen').innerHTML = `
            <div class="pixel-content">
                <div style="font-size: 32px; color: #666; margin-bottom: 10px;">💔</div>
                <div style="font-size: 10px; color: #AAA;">ENTENDIDO...</div>
            </div>
        `;
        
        document.getElementById('bottomScreen').innerHTML = `
            <div class="pixel-content">
                <div style="font-size: 9px; color: #FFF; line-height: 1.5; text-align: center;">
                    Que sua jornada Pokémon<br>
                    seja incrível!
                </div>
            </div>
        `;
    }
    
    // Criar confetti se aceitou
    if (accepted) {
        createConfetti();
    }
}

function createConfetti() {
    // Código do confetti que já temos
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = '5px';
            confetti.style.height = '5px';
            confetti.style.background = ['#FF4081', '#4FC3F7', '#FFD700', '#00E676'][Math.floor(Math.random() * 4)];
            confetti.style.borderRadius = '50%';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.animation = `fall ${Math.random() * 2 + 1}s linear forwards`;
            
            // Adicionar animação
            const style = document.createElement('style');
            style.textContent = `
                @keyframes fall {
                    to {
                        transform: translateY(400px) rotate(${Math.random() * 360}deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
            
            document.querySelector('.ds-container').appendChild(confetti);
            
            // Remover após animação
            setTimeout(() => confetti.remove(), 3000);
        }, i * 100);
    }
}