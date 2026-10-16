const CONTACT_EMAIL = 'dev.caramelostudio@gmail.com'

function Contact({ children }: { children: string }) {
  return (
    <div className="pp__contact">
      {children}
      <br />
      <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
    </div>
  )
}

export function PrivacyPt() {
  return (
    <div className="pp__content">
      <h1 className="pp__title">Política de Privacidade</h1>
      <p className="pp__meta">Última atualização: 5 de setembro de 2026</p>

      <p>Esta Política de Privacidade descreve como o aplicativo <strong>Cachorro Caramelo Clicker</strong> (o "Aplicativo"), desenvolvido para dispositivos Android e disponibilizado na Google Play Store, trata as informações dos usuários.</p>

      <h2>1. Quem somos</h2>
      <p>O Aplicativo é desenvolvido e mantido por um desenvolvedor independente. Se você tiver dúvidas sobre esta política, entre em contato pelo e-mail informado na seção "Contato" abaixo.</p>

      <h2>2. Resumo</h2>
      <ul>
        <li>Não pedimos cadastro, e-mail, nome, localização, contatos ou fotos.</li>
        <li>O progresso do jogo fica salvo no seu dispositivo e, se você entrar com o Google Play Games, também na nuvem, vinculado à sua conta de jogador.</li>
        <li>Usamos serviços do Google para análise de uso (Firebase Analytics), relatórios de falhas (Firebase Crashlytics) e anúncios em vídeo opcionais (Google AdMob).</li>
        <li>Você pode pedir a exclusão dos seus dados a qualquer momento (seção 8).</li>
      </ul>

      <h2>3. Login com Google Play Games</h2>
      <p>Ao abrir o Aplicativo, ele oferece o login com o <strong>Google Play Games</strong>. O login é opcional: se você recusar ou fechar a janela, o jogo continua funcionando com o progresso salvo apenas no dispositivo.</p>
      <p>Quando você entra, o Google Play Games nos fornece o <strong>identificador de jogador</strong> e o <strong>nome de exibição</strong> do seu perfil de jogos. Usamos esse identificador apenas para reconhecer sua conta e associar o seu progresso a ela; não usamos o nome de exibição para nenhuma outra finalidade e não temos acesso ao seu e-mail ou à sua conta Google.</p>

      <h2>4. Progresso do jogo e salvamento na nuvem</h2>
      <p>Todo o progresso do jogo (dogcoins, upgrades, boosts, conquistas, pontos de fama, gemas e configurações) é salvo no <strong>armazenamento local do seu dispositivo</strong>.</p>
      <p>Se você estiver conectado ao Google Play Games, uma cópia desse progresso também é enviada para o <strong>Firebase (Cloud Firestore)</strong>, um serviço do Google, associada ao seu identificador de jogador. Isso permite recuperar o progresso ao trocar de aparelho ou reinstalar o Aplicativo. Só você pode ler ou alterar o seu próprio salvamento, e ele não contém dados pessoais além do vínculo com a conta de jogador.</p>

      <h2>5. Análise de uso e relatórios de falhas</h2>
      <p>Usamos o <strong>Firebase Analytics</strong> para entender como o Aplicativo é usado (por exemplo, quais upgrades são comprados, conquistas desbloqueadas e renascimentos) e o <strong>Firebase Crashlytics</strong> para receber relatórios quando o Aplicativo apresenta erros. Esses serviços coletam informações técnicas como modelo do aparelho, versão do sistema, versão do Aplicativo, identificadores de instalação e o identificador de publicidade do Android, além de eventos de uso e registros de falhas. Não associamos esses dados ao seu nome ou e-mail.</p>

      <h2>6. Anúncios</h2>
      <p>O Aplicativo exibe <strong>anúncios em vídeo recompensados</strong> por meio do <strong>Google AdMob</strong>. Eles são sempre <strong>opcionais</strong>: só aparecem quando você toca em um botão para assistir e receber uma recompensa no jogo. Não há anúncios automáticos durante o jogo.</p>
      <p>Para veicular e medir os anúncios, o Google AdMob pode coletar o <strong>identificador de publicidade</strong> do seu dispositivo, informações sobre o aparelho e sobre as interações com os anúncios. Você pode redefinir ou desativar o identificador de publicidade nas configurações do Android. Em regiões onde a lei exige, o Aplicativo mostra uma tela de consentimento antes de exibir anúncios, na qual você pode escolher se aceita anúncios personalizados; sua escolha pode ser alterada depois.</p>
      <p>Saiba mais sobre como o Google usa os dados em <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>.</p>

      <h2>7. Compartilhamento e serviços de terceiros</h2>
      <p>Não vendemos seus dados. As informações descritas acima são processadas pelos seguintes serviços do Google, cada um sob a sua própria política de privacidade:</p>
      <ul>
        <li><strong>Google Play Games Services</strong> &mdash; login e identificação do jogador.</li>
        <li><strong>Firebase Authentication e Cloud Firestore</strong> &mdash; salvamento do progresso na nuvem.</li>
        <li><strong>Firebase Analytics</strong> &mdash; análise de uso.</li>
        <li><strong>Firebase Crashlytics</strong> &mdash; relatórios de falhas.</li>
        <li><strong>Google AdMob</strong> &mdash; anúncios recompensados.</li>
      </ul>
      <p>Política de privacidade do Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>.</p>

      <h2 id="exclusao">8. Exclusão de dados</h2>
      <p><strong>Dados no dispositivo:</strong> limpe os dados do Aplicativo nas configurações do Android ou desinstale o Aplicativo. Isso remove o progresso salvo localmente.</p>
      <p><strong>Progresso na nuvem:</strong> a opção "Resetar progresso" dentro do jogo zera o seu salvamento, inclusive a cópia na nuvem. Para excluir por completo o seu salvamento e o vínculo com a sua conta de jogador dos nossos servidores, envie um e-mail para o endereço da seção "Contato" informando o nome de exibição usado no Google Play Games. A exclusão é feita em até 3 meses.</p>
      <p><strong>Dados de análise, falhas e anúncios:</strong> são retidos pelo Google conforme as políticas de retenção do Firebase e do AdMob e não são vinculados ao seu nome. Redefinir o identificador de publicidade nas configurações do Android desvincula os dados de anúncios já coletados do seu dispositivo.</p>

      <h2>9. Permissões do aplicativo</h2>
      <ul>
        <li><strong>Internet:</strong> necessária para o login, o salvamento na nuvem, a análise de uso, os relatórios de falhas e os anúncios.</li>
        <li><strong>Identificador de publicidade (AD_ID):</strong> usado pelo Google AdMob e pelo Firebase Analytics, conforme descrito acima.</li>
        <li><strong>Vibração (haptics):</strong> usada apenas para feedback tátil ao tocar na tela; não coleta nem armazena dados.</li>
      </ul>

      <h2>10. Privacidade de crianças</h2>
      <p>O Aplicativo não é direcionado a menores de 13 anos e não coletamos intencionalmente dados pessoais de crianças. Se você acredita que uma criança nos forneceu dados, entre em contato para que sejam excluídos.</p>

      <h2>11. Alterações nesta política</h2>
      <p>Podemos atualizar esta Política de Privacidade periodicamente, por exemplo, ao adicionar novos recursos ao Aplicativo. A data da "Última atualização" no topo desta página será revisada sempre que houver mudanças. Recomendamos que você revise esta página periodicamente.</p>

      <h2>12. Contato</h2>
      <Contact>Em caso de dúvidas sobre esta Política de Privacidade ou para solicitar a exclusão dos seus dados, entre em contato:</Contact>
    </div>
  )
}

export function PrivacyEn() {
  return (
    <div className="pp__content">
      <h1 className="pp__title">Privacy Policy</h1>
      <p className="pp__meta">Last updated: September 5, 2026</p>

      <p>This Privacy Policy describes how the <strong>Cachorro Caramelo Clicker</strong> app (the "App"), developed for Android devices and made available on the Google Play Store, handles user information.</p>

      <h2>1. Who we are</h2>
      <p>The App is developed and maintained by an independent developer. If you have any questions about this policy, please contact us using the email address in the "Contact" section below.</p>

      <h2>2. Summary</h2>
      <ul>
        <li>We do not ask for registration, email, name, location, contacts or photos.</li>
        <li>Your game progress is saved on your device and, if you sign in with Google Play Games, also in the cloud, linked to your player account.</li>
        <li>We use Google services for usage analytics (Firebase Analytics), crash reporting (Firebase Crashlytics) and optional rewarded video ads (Google AdMob).</li>
        <li>You can request deletion of your data at any time (section 8).</li>
      </ul>

      <h2>3. Google Play Games sign-in</h2>
      <p>When the App opens, it offers sign-in with <strong>Google Play Games</strong>. Signing in is optional: if you decline or dismiss the prompt, the game keeps working with progress saved on the device only.</p>
      <p>When you sign in, Google Play Games provides us with your gaming profile's <strong>player ID</strong> and <strong>display name</strong>. We use the player ID only to recognise your account and associate your progress with it; we do not use the display name for any other purpose and we have no access to your email address or Google account.</p>

      <h2>4. Game progress and cloud save</h2>
      <p>All game progress (dogcoins, upgrades, boosts, achievements, fame points, gems and settings) is saved in <strong>your device's local storage</strong>.</p>
      <p>If you are signed in to Google Play Games, a copy of that progress is also uploaded to <strong>Firebase (Cloud Firestore)</strong>, a Google service, associated with your player ID. This lets you restore your progress when switching devices or reinstalling the App. Only you can read or change your own save, and it contains no personal data beyond the link to your player account.</p>

      <h2>5. Usage analytics and crash reports</h2>
      <p>We use <strong>Firebase Analytics</strong> to understand how the App is used (for example which upgrades are bought, achievements unlocked and rebirths performed) and <strong>Firebase Crashlytics</strong> to receive reports when the App encounters errors. These services collect technical information such as device model, operating system version, App version, installation identifiers and the Android advertising ID, together with usage events and crash logs. We do not associate this data with your name or email.</p>

      <h2>6. Advertising</h2>
      <p>The App shows <strong>rewarded video ads</strong> through <strong>Google AdMob</strong>. They are always <strong>optional</strong>: an ad is shown only when you tap a button to watch it in exchange for an in-game reward. There are no automatic ads during gameplay.</p>
      <p>To serve and measure ads, Google AdMob may collect your device's <strong>advertising ID</strong>, device information and information about your interactions with ads. You can reset or opt out of the advertising ID in your Android settings. Where required by law, the App shows a consent screen before displaying ads, where you can choose whether to allow personalised ads; you can change that choice later.</p>
      <p>Learn more about how Google uses data at <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>.</p>

      <h2>7. Sharing and third-party services</h2>
      <p>We do not sell your data. The information described above is processed by the following Google services, each under its own privacy policy:</p>
      <ul>
        <li><strong>Google Play Games Services</strong> &mdash; sign-in and player identification.</li>
        <li><strong>Firebase Authentication and Cloud Firestore</strong> &mdash; cloud save of your progress.</li>
        <li><strong>Firebase Analytics</strong> &mdash; usage analytics.</li>
        <li><strong>Firebase Crashlytics</strong> &mdash; crash reporting.</li>
        <li><strong>Google AdMob</strong> &mdash; rewarded ads.</li>
      </ul>
      <p>Google's privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>.</p>

      <h2 id="deletion">8. Data deletion</h2>
      <p><strong>Data on your device:</strong> clear the App's data in your Android settings or uninstall the App. This removes the locally saved progress.</p>
      <p><strong>Cloud progress:</strong> the "Reset progress" option inside the game wipes your save, including the cloud copy. To completely delete your save and the link to your player account from our servers, email the address in the "Contact" section stating the display name you use on Google Play Games. Deletion is completed within 3 months.</p>
      <p><strong>Analytics, crash and advertising data:</strong> retained by Google according to Firebase and AdMob retention policies and not linked to your name. Resetting the advertising ID in your Android settings unlinks previously collected advertising data from your device.</p>

      <h2>9. App permissions</h2>
      <ul>
        <li><strong>Internet:</strong> required for sign-in, cloud save, analytics, crash reports and ads.</li>
        <li><strong>Advertising ID (AD_ID):</strong> used by Google AdMob and Firebase Analytics as described above.</li>
        <li><strong>Vibration (haptics):</strong> used only for tactile feedback when tapping the screen; it does not collect or store any data.</li>
      </ul>

      <h2>10. Children's privacy</h2>
      <p>The App is not directed at children under 13 and we do not knowingly collect personal data from children. If you believe a child has provided us with data, please contact us so it can be deleted.</p>

      <h2>11. Changes to this policy</h2>
      <p>We may update this Privacy Policy from time to time, for example when new features are added to the App. The "Last updated" date at the top of this page will be revised whenever changes are made. We recommend that you review this page periodically.</p>

      <h2>12. Contact</h2>
      <Contact>If you have any questions about this Privacy Policy or want to request deletion of your data, please contact us:</Contact>
    </div>
  )
}

export function PrivacyEs() {
  return (
    <div className="pp__content">
      <h1 className="pp__title">Política de Privacidad</h1>
      <p className="pp__meta">Última actualización: 5 de septiembre de 2026</p>

      <p>Esta Política de Privacidad describe cómo la aplicación <strong>Cachorro Caramelo Clicker</strong> (la "Aplicación"), desarrollada para dispositivos Android y disponible en Google Play Store, trata la información de los usuarios.</p>

      <h2>1. Quiénes somos</h2>
      <p>La Aplicación es desarrollada y mantenida por un desarrollador independiente. Si tienes dudas sobre esta política, contáctanos por el correo electrónico indicado en la sección "Contacto" más abajo.</p>

      <h2>2. Resumen</h2>
      <ul>
        <li>No pedimos registro, correo electrónico, nombre, ubicación, contactos ni fotos.</li>
        <li>El progreso del juego se guarda en tu dispositivo y, si inicias sesión con Google Play Games, también en la nube, vinculado a tu cuenta de jugador.</li>
        <li>Usamos servicios de Google para análisis de uso (Firebase Analytics), informes de fallos (Firebase Crashlytics) y anuncios de video opcionales (Google AdMob).</li>
        <li>Puedes solicitar la eliminación de tus datos en cualquier momento (sección 8).</li>
      </ul>

      <h2>3. Inicio de sesión con Google Play Games</h2>
      <p>Al abrir la Aplicación, esta ofrece iniciar sesión con <strong>Google Play Games</strong>. Iniciar sesión es opcional: si rechazas o cierras la ventana, el juego sigue funcionando con el progreso guardado solo en el dispositivo.</p>
      <p>Cuando inicias sesión, Google Play Games nos proporciona el <strong>identificador de jugador</strong> y el <strong>nombre visible</strong> de tu perfil de juegos. Usamos ese identificador únicamente para reconocer tu cuenta y asociar tu progreso a ella; no usamos el nombre visible para ningún otro fin y no tenemos acceso a tu correo electrónico ni a tu cuenta de Google.</p>

      <h2>4. Progreso del juego y guardado en la nube</h2>
      <p>Todo el progreso del juego (dogcoins, mejoras, boosts, logros, puntos de fama, gemas y ajustes) se guarda en el <strong>almacenamiento local de tu dispositivo</strong>.</p>
      <p>Si tienes la sesión iniciada en Google Play Games, una copia de ese progreso también se envía a <strong>Firebase (Cloud Firestore)</strong>, un servicio de Google, asociada a tu identificador de jugador. Esto permite recuperar el progreso al cambiar de dispositivo o reinstalar la Aplicación. Solo tú puedes leer o modificar tu propio guardado, y este no contiene datos personales más allá del vínculo con la cuenta de jugador.</p>

      <h2>5. Análisis de uso e informes de fallos</h2>
      <p>Usamos <strong>Firebase Analytics</strong> para entender cómo se usa la Aplicación (por ejemplo, qué mejoras se compran, logros desbloqueados y renacimientos) y <strong>Firebase Crashlytics</strong> para recibir informes cuando la Aplicación presenta errores. Estos servicios recopilan información técnica como modelo del dispositivo, versión del sistema, versión de la Aplicación, identificadores de instalación y el identificador de publicidad de Android, además de eventos de uso y registros de fallos. No asociamos estos datos a tu nombre ni a tu correo electrónico.</p>

      <h2>6. Anuncios</h2>
      <p>La Aplicación muestra <strong>anuncios de video con recompensa</strong> mediante <strong>Google AdMob</strong>. Son siempre <strong>opcionales</strong>: solo aparecen cuando tocas un botón para verlos y recibir una recompensa en el juego. No hay anuncios automáticos durante el juego.</p>
      <p>Para mostrar y medir los anuncios, Google AdMob puede recopilar el <strong>identificador de publicidad</strong> de tu dispositivo, información sobre el dispositivo y sobre las interacciones con los anuncios. Puedes restablecer o desactivar el identificador de publicidad en los ajustes de Android. En las regiones donde la ley lo exige, la Aplicación muestra una pantalla de consentimiento antes de mostrar anuncios, en la que puedes elegir si aceptas anuncios personalizados; puedes cambiar esa elección más adelante.</p>
      <p>Más información sobre cómo Google usa los datos en <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>.</p>

      <h2>7. Compartición y servicios de terceros</h2>
      <p>No vendemos tus datos. La información descrita arriba es procesada por los siguientes servicios de Google, cada uno bajo su propia política de privacidad:</p>
      <ul>
        <li><strong>Google Play Games Services</strong> &mdash; inicio de sesión e identificación del jugador.</li>
        <li><strong>Firebase Authentication y Cloud Firestore</strong> &mdash; guardado del progreso en la nube.</li>
        <li><strong>Firebase Analytics</strong> &mdash; análisis de uso.</li>
        <li><strong>Firebase Crashlytics</strong> &mdash; informes de fallos.</li>
        <li><strong>Google AdMob</strong> &mdash; anuncios con recompensa.</li>
      </ul>
      <p>Política de privacidad de Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>.</p>

      <h2 id="eliminacion">8. Eliminación de datos</h2>
      <p><strong>Datos en el dispositivo:</strong> borra los datos de la Aplicación en los ajustes de Android o desinstala la Aplicación. Esto elimina el progreso guardado localmente.</p>
      <p><strong>Progreso en la nube:</strong> la opción "Reiniciar progreso" dentro del juego borra tu guardado, incluida la copia en la nube. Para eliminar por completo tu guardado y el vínculo con tu cuenta de jugador de nuestros servidores, envía un correo a la dirección de la sección "Contacto" indicando el nombre visible que usas en Google Play Games. La eliminación se realiza en un plazo de hasta 3 meses.</p>
      <p><strong>Datos de análisis, fallos y anuncios:</strong> Google los conserva según las políticas de retención de Firebase y AdMob y no están vinculados a tu nombre. Restablecer el identificador de publicidad en los ajustes de Android desvincula los datos publicitarios ya recopilados de tu dispositivo.</p>

      <h2>9. Permisos de la aplicación</h2>
      <ul>
        <li><strong>Internet:</strong> necesario para el inicio de sesión, el guardado en la nube, el análisis de uso, los informes de fallos y los anuncios.</li>
        <li><strong>Identificador de publicidad (AD_ID):</strong> usado por Google AdMob y Firebase Analytics, como se describe arriba.</li>
        <li><strong>Vibración (haptics):</strong> usada solo para respuesta táctil al tocar la pantalla; no recopila ni almacena datos.</li>
      </ul>

      <h2>10. Privacidad de los niños</h2>
      <p>La Aplicación no está dirigida a menores de 13 años y no recopilamos intencionadamente datos personales de niños. Si crees que un niño nos ha proporcionado datos, contáctanos para que sean eliminados.</p>

      <h2>11. Cambios en esta política</h2>
      <p>Podemos actualizar esta Política de Privacidad periódicamente, por ejemplo, al añadir nuevas funciones a la Aplicación. La fecha de "Última actualización" en la parte superior de esta página se revisará siempre que haya cambios. Te recomendamos revisar esta página periódicamente.</p>

      <h2>12. Contacto</h2>
      <Contact>Si tienes dudas sobre esta Política de Privacidad o quieres solicitar la eliminación de tus datos, contáctanos:</Contact>
    </div>
  )
}
